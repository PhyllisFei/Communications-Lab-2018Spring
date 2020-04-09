// vatiables
var colorNames = ["red", "orange", "yellow", "green", "blue", "darkblue", "purple", "white", "cyan"];
var index = 0;

// event
window.onload = init;

//functions
function init(){
	console.log("loaded!");

	// let's add a button in JavaScript
	var tempBtn = document.createElement("BUTTON");
	tempBtn.id = "btn1";
	tempBtn.innerHTML = "Button";
	document.body.appendChild(tempBtn);
	document.getElementById("btn1").addEventListener("click", clickFunction);
}

function clickFunction(){

	// change the color and html of the div
	document.getElementsByClassName("section")[0].innerHTML = colorNames[index];
	document.getElementsByClassName("section")[0].style.backgroundColor = colorNames[index];

	index ++;
	if (index == colorNames.length){
		index = 0;
	}

	console.log(colorNames.length);
}