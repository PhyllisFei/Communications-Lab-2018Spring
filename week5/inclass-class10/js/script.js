var colorNames = ["red", "orange", "yellow", "green","blue", "darkblue", "purple"];

window.onload = init;

function init(){
	console.log("WIndow Loaded!");
	createDivs(100, 100, 500);
	console.log("Divs Created");
	//setTimeout(,);
	//setInterval(,);

	//setTimeout( changeDivColor, 1000 );
	setInterval( changeDivColor, 1000 );
} 

function createDivs(w, h, totalNumber){
	//appendChild
	for (var i=0; i < totalNumber; i++){
		var newDiv = document.createElement("DIV");
		newDiv.className="colorDiv";
		newDiv.style.width = "100%";
		newDiv.style.height = h + "px";
		// newDiv.style.float = "left";
		document.body.appendChild(newDiv);
	}
}
function changeDivColor(){
	var divs = document.getElementsByClassName("colorDiv");

	for (var i=0; i<divs.length; i++){
		//parseFloat();
		var r = parseInt ( Math.random() * 255 );
		var g = parseInt ( Math.random() * 255 );
		var b = parseInt ( Math.random() * 255 );
		divs[i].style.backgroundColor = 
		"rgb(" + r + "," + g + "," + b + ")";
	}

}