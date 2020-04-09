function setup() {
	createCanvas(500, 600);
}


function draw() {
	background(100);

	push();
	translate(width/2, height/2);
	rotate( frameCount * 0.01 );  //***rad, not degree!!
	scale(0.7);

	rectMode(CENTER);
	fill(255, 0, 0);
	rect(0, 0, 100, 100);
	pop();

	rect(100, 100, 100, 100);
}