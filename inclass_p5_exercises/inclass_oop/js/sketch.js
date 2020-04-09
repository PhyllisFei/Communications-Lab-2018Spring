"use strict";

var balls = [];


function setup() {
	createCanvas(500, 600);
	background(100);
	noStroke();

	for (var i=0; i<10; i++){
		var x = random(width);
		var y = random(height);
		var dia = random(10, 20);
		// balls[i] = new Ball();
		balls.push( new Ball(x, y, dia) );
	}
}


function draw() {
	for (var i=0; i< balls.length; i++){
		balls[i].display();
	}
}





class Ball {
	constructor(x, y, dia) {
		// fields or properties
		this.x = width/2;
		this.y = height/2;
		this.dia = 100;
	}
	// methods
	display(){
		fill(255, 0, 0);
		ellipse(this.x, this.y, this.dia, this.dia);
	}

}