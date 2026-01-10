//temprature conversion

const textBox = document.getElementById("textBox");

const toFeren = document.getElementById("toFeren");
const toCelcius = document.getElementById("toCelcius");


const result = document.getElementById("result");

let temp;



function convert() {
     if (toFeren.checked) {
       
          temp = Number(textBox.value);
          temp = temp * 9 / 5 + 32;
          result.textContent = temp.toFixed(1) + " ℉"
     }
     else if (toCelcius.checked) {
         
          temp = Number(textBox.value);
          temp = (temp-32)*5/9;
          result.textContent = temp.toFixed(1) + " ℃"
     }
     else {
          result.textContent = "Select a unit from above!!"
     }

}