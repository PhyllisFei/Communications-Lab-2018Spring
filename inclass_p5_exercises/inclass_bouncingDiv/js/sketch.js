var div;
var divX, divY;
var divXspeed, divYspeed;

function setup() {
	createCanvas(windowHeight, windowHeight);
	// div = document.getElementById("div");
	// div = createDiv("div");
	div = select("#div");
	div.style("backgroundColor", "#F00");
	div.style("width", "100px");
	div.style("height", "100px");
	div.position(100, 100);
	divX = windowWidth / 2;
	divY = windowHeight / 2;
	divXspeed = random(-5, 5);
	divYspeed = random(-5, 5);
}


function draw() {
	background(0);

	//update
	divX += divXspeed;
	divY += divYspeed;

	//check
	if (divX < 0 || divX > windowWidth - 50) {
		divXspeed = -divXspeed;
	}
	if (divY< 0 || divY > windowHeight - 50) {
		divYspeed *= -1;
	}
	//display
	 div.position(divX, divY);

}