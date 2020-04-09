var img;
var cam;

function preload() {
	// img = loadImg("image/img.jpeg");
}

function setup() {
	createCanvas(640, 480);
	cam = createCapture("VIDEO"); // ***** cam from dom
	cam.hide();
}


function draw() {
	background(0);
	tint(255, 0, 0);
	// imageMode(CENTER);
	image(cam, 0, 0); // ***** cam from canvas
	// filter(BLUR, 6);
	filter(INVERT);
}