function setup() {

	createCanvas(500, 600);
	background(100);
}


function draw() {
	// background(100, 15);
if (mouseIsPressed){
	noStroke();
	fill(random(0,255), random(0,255), random(0,255), 95);
	ellipse(mouseX, mouseY, 10, 10);
	
	}
}

// mousePressed()
function mouseDragged(){
	// background(random(255),random(255),random(255));
}