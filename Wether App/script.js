const theme = document.getElementById("theme");
const searchCity = document.getElementById("searchCity");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const rainProbability = document.getElementById("rainProbability");
const imgToday = document.getElementById("imgToday");


const realFeelData = document.getElementById("realFeelData");
const windData = document.getElementById("windData");
const rainData = document.getElementById("rainData");
const uvData = document.getElementById("uvData");


const timeline = document.querySelector(".timeline");
const weekForecast = document.querySelector(".weekForecast");

const apiKey = config.API_KEY;


//======================= THEME =======================
theme.addEventListener("click", () => {

  const currentTheme = document.body.getAttribute("data-theme");

  if (currentTheme === "dark") {
    document.body.removeAttribute("data-theme");
    theme.innerHTML = `
     <i data-lucide="sun"></i>
                Light
    `
  } else {
    document.body.setAttribute("data-theme", "dark");
    theme.innerHTML = `
            <i data-lucide="moon"></i>
            Dark
        `;
  }

  lucide.createIcons();

});

//======================= UI UPDATE =======================
function updateUI(data) {
  cityName.textContent = data.name;
  temperature.textContent = Math.round(data.main.temp) + "° C";
  rainProbability.textContent = "Rain probability: " + (data.clouds?.all ?? 0) + "%";


  const weatherType = data.weather[0].main;

  const weatherIcons = {
    Clear: "./content/sunny.png",
    Clouds: "./content/cloudy.png",
    Rain: "./content/rainy.png",
    Snow: "./content/snow.png",
    Thunderstorm: "./content/storm.png",
    Drizzle: "./content/drizzle.png",
    Mist: "./content/cloudy.png"
  };

  imgToday.src = weatherIcons[weatherType] || "./content/snow.png"

  realFeelData.textContent = Math.round(data.main.feels_like) + "°";
  windData.textContent = data.wind.speed + " km/h";
  rainData.textContent = (data.clouds?.all ?? 0) + "%";
  humidity.textContent = data.main.humidity + "%";
  console.log(weatherType)
}

function renderForecast(data) {
  timeline.innerHTML = "";
  const now = new Date();

  const future = data.list.filter(item => new Date(item.dt_txt) >= now);
  const nextHours = future.slice(0, 6);

  nextHours.forEach(hour => {
    const time = hour.dt_txt.slice(11, 16);
    const temp = Math.floor(hour.main.temp);
    const icon = hour.weather[0].icon;

    const card = document.createElement("div");
    card.classList.add("forecastCard");
    card.innerHTML = `
    <p id="time">${time}</p>
      <img src="https://openweathermap.org/img/wn/${icon}.png">
      <p id="temp">${temp}° c</p>
    `;
    timeline.appendChild(card);
  });
}

function renderWeeklyForecast(data) {

  weekForecast.innerHTML = "";

  const daily = data.list.filter(item =>
    item.dt_txt.includes("12:00:00")
  );

  daily.forEach(day => {

    const date = new Date(day.dt_txt);
    const dayName = date.toLocaleDateString("en-US", { weekday: "long" });

    const temp = Math.round(day.main.temp);
    const icon = day.weather[0].icon;

    const card = document.createElement("div");
    card.classList.add("weakCard");

    card.innerHTML = `
      <p id="weakName">${dayName}</p>
      <img src="https://openweathermap.org/img/wn/${icon}.png">
      <p id="weakTemp">${temp}°</p>
    `;

    weekForecast.appendChild(card);

  });

}

//======================= SEARCH CITY =======================
searchCity.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const city = searchCity.value.trim();

    if (!city) {
      getUserLocation();
      return;
    }
    getWeatherByCityName(city);
  }
})



//======================= GET LOCATION =======================
function getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successLocation, errorLocation);
  }
  else {
    console.log("Geolocation not supported");
  }
}
function successLocation(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  getWeatherByCoords(lat, lon);
}
function errorLocation() {
  getWeatherByCityName("Delhi");
}

//======================= WEATHER BY COORDINATES =======================
async function getWeatherByCoords(lat, lon) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
  );
  const data = await response.json();
  updateUI(data);
  getForecastByCoords(lat, lon);

}
async function getForecastByCoords(lat, lon) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);

  const data = await response.json();
  renderForecast(data);
  renderWeeklyForecast(data);
}

//======================= WEATHER BY CITY NAME  =======================
async function getForecastByCity(city) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);

  const data = await response.json();
  renderWeeklyForecast(data);
  renderForecast(data);
}

async function getWeatherByCityName(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );
  const data = await response.json();

  if (data.cod === "404") {
    alert("City not found. Please enter a valid city.");
    searchCity.value = "";
    return;
  }
  getForecastByCity(city)
  updateUI(data);

}





//======================= FUNCTION CALLS =======================
getUserLocation();
lucide.createIcons();
