var x, y;

function setup() {
	createCanvas(500, 600);
	background(100);

	// line(x1, y1, x2, y2);
	noStroke();
	// fill(255); ----> w / rayScale color
}


function draw() {
	// background(100);
	
	x = random (0, width);
	y = random (0, height);

	var dia = random(10, 50)
	
	var r = random(0, 255);
	var g = random(0, 255);
	var b = random(0, 255);

	var a = random(100, 150);

	stroke(r, g, b, a);
	fill(r, g, b, a); // r, g, b
	strokeWeight(10);
	ellipse(x, y, dia, dia);
	// ellipse(random(100, 300), random(100, 300), width/2, height/2);
	// ellipse(frameCount, frameCount, 100, 100);

	//print( frameCount );
}