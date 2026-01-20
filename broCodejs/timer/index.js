
let timeoutId;

function startTimer() {
     timeoutId=setTimeout(() => window.alert("hello every nyan"), 3000);
     console.log(`STARTED`)
}


function clearTimer(){
     clearTimeout(timeoutId);
     console.log("CLEARED")
}