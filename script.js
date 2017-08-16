var min =0;
var max = 100;
var random = 88;
var container = document.getElementById("container");

function randomNum(){
  random = Math.floor(Math.random()*(max - min + 1)) + min;
  container.innerHTML = random;
}

function guessDown(){
  max = random;
  randomNum();
}

function guessUp(){
  min = random;
  randomNum();
}

function playRestart(){
    if(startbtn.innerHTML === "play"){
      randomNum();
      document.getElementById('high').disabled = false;
      document.getElementById('low').disabled = false;
      startbtn.innerHTML = "reset";
    } else if (startbtn.innerHTML === "reset"){
      document.getElementById('high').disabled = true;
      document.getElementById('low').disabled = true;
      max = 101;
      min = 0;
      container.innerHTML = "";
      startbtn.innerHTML = "play";
    } 
}

var startbtn = document.getElementById("start");

document.getElementById('high').disabled = true;
      document.getElementById('low').disabled = true;
document.getElementById("start").addEventListener("click", playRestart);
document.getElementById("low").addEventListener("click", guessDown);
document.getElementById("high").addEventListener("click", guessUp);