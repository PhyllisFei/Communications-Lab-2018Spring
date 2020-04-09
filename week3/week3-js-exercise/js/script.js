//function name {
	//do this

//}

function showAlert() {

	//alert("ok!");
	console.log("working");
}


function changeText() {
	//document.getElementById("box1").innerHTML = "BOXXX";

	//BOM
	//confirm("Really?");	
	//prompt("What is your name?";

	document.getElementById("box1").innerHTML = prompt("What is your name?");
	console.log("working?");

}

function changeBgColor() {
	document.getElementById("box2").style.backgroundColor = "rgb(255,0,0)";
	// document.getElementsByClassName("box")[0].style.backgroundColor = "rgb(255,0,0)";
	// document.getElementsByClassName("box")[1].style.backgroundColor = "rgb(255,0,0)";
	// document.getElementsByClassName("box")[2].style.backgroundColor = "rgb(255,0,0)";

}

function openNewWindow() {

	//window.open(url,name,specs);

	window.open("index.html","_blank","width=200, height=300, left=100, top=100");
	//window.close();
}	