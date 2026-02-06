const display = document.getElementById("display");

function appendToDisplay(input) {
     display.value += input;
}

function clearDisplay() {
     display.value = 0;
}

function calculate() {
     try {
          display.value = eval(display.value);
     }
     catch {
          display.value = "ERROR"
     }
}


function deleteLast() {
     display.value = display.value.slice(0, -1);
}