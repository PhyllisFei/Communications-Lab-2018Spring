function buttonClicked(){
	var answer = confirm("Right?");

	if (answer == true) {
		//do something
		//alert("LEFT");
		document.getElementById('area').style.backgroundColor = "red";
	} else {
		//do something else
		//alert("what!");
		document.getElementById('area').style.backgroundColor = "blue";

	}

}

function changeBgColor(){
	var x = event.clientX; //event.screen
	var y = event.clientY;

	console.log(x + " " + y);

	// if (x < 200) {
	// 	document.getElementById('area').style.backgroundColor = "gray";
	// }else if(x >=200 && x < 400){
	// 	document.getElementById('area').style.backgroundColor = "red";
	// }else {
	// 	document.getElementById('area').style.backgroundColor = "white";
	// }
	if (x < 200 || x > 600) {
		document.getElementById('body').style.backgroundColor = "gray";
	}else {
		document.getElementById('body').style.backgroundColor = "white";
	}
}

var redColor = 0;

var movable = false;

function changeColor(){
	if (movable == true) {
		var x = event.clientX;
		var y = event.clientY;

		redColor = redColor + 2;

		if(redColor>255) {
			redColor = 0;
		}
		document.getElementById('area').style.backgroundColor = "rgb(" + redColor + ",0,0)";
		document.getElementById('area').style.left = (x - 150) + "px";
		document.getElementById('area').style.top = (y - 150) + "px";
	}
}

function resetColor(){
	document.getElementById('area').style.backgroundColor = "lightgray";
}

function areaPressed(){
	movable = true;
}

function areaReleased(){
	movable = false;
}





















