const drumPad=document.querySelectorAll(".drum-pad");
const display=document.getElementById("display");

drumPad.forEach(pad=>{
     pad.addEventListener("click",(e)=>{
         const audio=pad.querySelector(".clip");
         audio.currentTime=0;
         audio.play();
         display.textContent=pad.id;
     });
});

document.addEventListener("keydown",(e)=>{
const key=e.key.toUpperCase();
 const audio=document.getElementById(key);
 if(!audio) return;

 const pad=audio.parentElement;
 audio.currentTime=0;
         audio.play();
         display.textContent=pad.id;
});