var colorR = 0;
var colorG = 0;
var colorB = 0;

//var unit = "px";


function buttonCLicked(){

	//value = value + 50;

	//var result = value + unit;
	// var result = document.getElementById('area').innerHTML;
	// console.log(result);

	colorR = document.getElementById('red').value;
	colorG = document.getElementById('green').value;
	colorB = document.getElementById('blue').value;
	document.getElementById('area').style.backgroundColor = 
	//'rgb(0,255,0)';
	"rgb("+ colorR + "," + colorG + "," + colorB + ")";
}

function mouseMoved(){
	var x = event.clientX;
	var y = event.clientY;

	 console.log(x);
	// console.log(y);


	// colorR = x;
	// colorG = 0;
	// colorB = y;

	// document.getElementById('area').style.backgroundColor = 
	// "rgb("+ colorR + "," + colorG + "," + colorB + ")";

	//document.getElementById('area').innerHTML = x + "," + y;

	document.getElementById('area').style.left = x + "px";

	document.getElementById('area').style.top = y + "px";
}