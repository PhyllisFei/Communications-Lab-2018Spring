window.onload = init;

function init(){
	console.log("Window Loaded!");
}
function playAudio(){
	var audio = document.getElementById('myAudio');
	audio.play();
	console.log("Play!");
}
function stopAudio(){
	var audio = document.getElementById('myAudio');
	//audio.pause();
	//audio.currentTime = 0;

	console.log(audio.duration);
	audio.currentTime = Math.random() * audio.duration;
	audio.volume = Math.random(); // 0 ~ 1

	// jump to random position

	console.log("Stop!");
}