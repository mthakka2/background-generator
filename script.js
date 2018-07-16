var css= document.querySelector("h3");
var color1= document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");
var p = document.querySelector("p");

console.log(css);
console.log(color1);
console.log(color2);

function setGradient(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function generateNumber(){
  var letters = '0123456789ABCDEF';
  var colorLeft = '#';
  var colorRight = '#';
  for (var i = 0; i < 6; i++) {
    colorLeft += letters[Math.floor(Math.random() * 16)];
    colorRight += letters[Math.floor(Math.random() * 16)];
  }
  body.style.background = "linear-gradient(to right, " + colorLeft + ", " + colorRight + ")";
  css.textContent = body.style.background + ";";
}

button.addEventListener("click", generateNumber);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);