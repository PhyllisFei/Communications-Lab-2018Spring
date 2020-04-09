window.onload = init;


var vol = 1.0;


function init() {
	console.log("Window Loaded!");
}

function volumeUp(){
	// increase the volume
	vol = vol + 0.1;
	// limit the volume
	if (vol>1.0) {vol = 1.0;}
	var audio = document.getElementById("myAudio");
	audio.volume = vol;
	console.log("Volume Increased!");

}
function volumeDown(){
	// increase the volume
	vol = vol - 0.1;
	// limit the volume
	if (vol<0.0) {vol = 0.0;}
var audio = document.getElementById("myAudio");
	audio.volume = vol;
	console.log("Volume Increased!");
}


function playAudio(){
	var audio = document.getElementById("myAudio");
	audio.play();
	console.log("Played!");
}
function stopAudio(){
	var audio = document.getElementById("myAudio");
	audio.pause();
	audio.currentTime = 0;
	console.log("Stopped!");
}

function goRandom(){
	var audio = document.getElementById("myAudio");
	//audio.pause();
	audio.currentTime = Math.random() * audio.duration; // 0 ~ 1
	audio.volume = Math.random(); // 0.0 ~ 1.0 == 0% ~ 100%
	audio.playbackRate = 0.5 + Math.random() * 2; // 0.5 ~ 2.5
	console.log("Random!");
}