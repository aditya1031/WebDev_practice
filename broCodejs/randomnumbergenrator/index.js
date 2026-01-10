const myButton = document.getElementById("button");

const myNumber1 = document.getElementById("number1");
const myNumber2 = document.getElementById("number2");
const myNumber3 = document.getElementById("number3");

const min = 1;
const max = 6;

let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function () {
     randomNum1 = Math.floor(Math.random() * max) + min;
     randomNum2 = Math.floor(Math.random() * max) + min;
     randomNum3 = Math.floor(Math.random() * max) + min;
     myNumber1.textContent = randomNum1;
     myNumber2.textContent = randomNum2;
     myNumber3.textContent = randomNum3;
}