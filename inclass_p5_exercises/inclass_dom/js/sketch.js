var canvas;
var sliderR;
var sliderG;
var sliderB;
var sliderX;
var sliderY;
var sliderW;
var sliderH;

function setup() {
	canvas = createCanvas(500, 600);
	// canvas.position(100, 100);
	// canvas.style("position", "absolute");
	// canvas.style("left", "50px");
	// canvas.style("top", "50px");

	sliderR = createSlider(0, 255, 0);
	sliderG = createSlider(0, 255, 0);
	sliderB = createSlider(0, 255, 0);

	sliderX = createSlider(0, windowWidth, 0, 100);
	sliderY = createSlider(0, windowHeight, 0, 100);

	sliderW = createSlider(0, 500, 450, 50);
	sliderH = createSlider(0, 500, 450, 50);
	// slider.position(0, 200);
	// slider.style("width", "500px");
}


function draw() {
	// var w = slider.value();
	
	// dom
	canvas.position( sliderX.value(), sliderY.value() );
	canvas.style( "width", sliderW.value() + "px" );
	canvas.style( "height", ( sliderH.value() + "px") );

	// graphics in the canvas
	background(sliderR.value(), sliderG.value(), sliderB.value() );

}