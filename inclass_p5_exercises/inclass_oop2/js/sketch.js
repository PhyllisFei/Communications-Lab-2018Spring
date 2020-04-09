"use strict";

var circles = [];

function setup() {
	createCanvas(500, 600);
}

function draw() {
	background(0);

	push();
	translate(width/2, height/2);
	rotate(frameCount * 0.2);

	circles.push( new Circle(0, 0) )


	for (var i=0; i<circles.length; i++){
		circles[i].move();	
		// circles[i].checkEdges();
		circles[i].display();
	}

	if (circles.length > 1000) {
		circles.splice(0, 1);
	}

	pop();


	fill(255);
	text(circles.length, 10, 20);
}

function mouseDragged() {
	// for (var i=0; i<100; i++){
		// circles.push( new Circle(mouseX, mouseY) )
		// circles.push( new Circle(mouseX, mouseY) )
		// circles.push( new Circle(mouseX, mouseY) )
	// }
}

class Circle {
	constructor( x, y ) {
		this.x = x;
		this.y = y;
		this.dia = random(10, 30);

		this.xspeed = random(-5,5);
		this.yspeed = random(0,5);

		this.r = random(0, 255);
		this.g = random(0, 255);
		this.b = random(0, 255);
	}

	move(){
		this.x += this.xspeed;
		this.y += this.yspeed;
	}

	checkEdges() {
		if(this.x < 0){
			this.x = width;
		} else if(this.x > width){
			this.x = 0;
		}
		if(this.y < 0){
			this.y = height;
		}
		else if(this.y > height){
			this.y = 0;
		}
	}

	bounce() {
		if(this.x < 0 || this.x > width) {
			this.xspeed = -this.xspeed;
		}
		if(this.y < 0 || this.y > height) {
			this.yspeed = -this.yspeed;
		}
	}

	display() {
		noStroke();
		fill(this.r, this.g, this.b, 100);
		ellipse(this.x, this.y, this.dia, this.dia);
	}
}