window.onload = init;


var myWindow;
var opened = false;

function init() {
	console.log("Window Loaded!");
}

function videoClicked(){
	console.log("clicked!");

	var vid = document.getElementById("myVideo");

	if(vid.paused == true){
		vid.play();
	} else {
		vid.pause();
		// vid.currentTime = Math.random() * vid.duration;
	}
}

function videoUpdated(){
	var vid = document.getElementById("myVideo");
	var info = document.getElementById("info");
	//console.log(vid.currentTime);

	var timeLeft = vid.duration - vid.currentTime;

	info.innerHTML = timeLeft;
	//info.style.fontSize = timeLeft + "em"; //16px

	if(timeLeft < 30 && opened == false){
		// vid.src = "video/video0.mp4";
		// vid.play();
		opened = true;
		var xpos = screen.width - 200;

		myWindow = window.open("popup1.html", "_blank", 
			"width=200, height=200, left=" + xpos +", top=200");

		// console.log(screen.width); //(window.innerWidth);
		// console.log(screen.height); //(window.innerHeight);
		// console.log("______");
	} else if (timeLeft<27) {
		myWindow.close();
	}
}