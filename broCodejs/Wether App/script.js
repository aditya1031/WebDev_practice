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

const apiKey = config.API_KEY;




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

function updateUI(data) {
  cityName.textContent = data.name;
  temperature.textContent = Math.round(data.main.temp) + "° C";
  rainProbability.textContent = "Rain probability: " + (data.clouds?.all ?? 0) + "%";


  realFeelData.textContent = Math.round(data.main.feels_like) + "°";
  windData.textContent = data.wind.speed + " km/h";
  rainData.textContent = (data.clouds?.all ?? 0) + "%";
  humidity.textContent = data.main.humidity + "%";

}




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
  console.log("Location access denied");
}

async function getWeatherByCoords(lat, lon) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
  );
  const data = await response.json();
  updateUI(data);
  console.log(data)
}


searchCity.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const city = searchCity.value.trim();

    if (city !== "") {
      getWeatherByCityName(city);
    }
  }
})

async function getWeatherByCityName(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );
  const data = await response.json();
  updateUI(data);
}




getUserLocation();
lucide.createIcons();
