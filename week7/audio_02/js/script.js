window.onload = init;

var sounds = [];

function init() {
	console.log("Window Loaded!");

	loadSounds();
	createDivs();
}


function loadSounds(){

	for (var i=0; i<9; i++){
		sounds[i] = document.createElement("AUDIO");
		sounds[i].src = "audio/sound" + (i % 9) + ".wav"; // modulo
		sounds[i].controls = true;
		sounds[i].loop = true;
		document.body.appendChild( sounds[i] );
	}
	console.log("Sound Loaded!");
}

function createDivs(){
	for (var i=0; i<sounds.length; i++){
		var div = document.createElement("DIV");
		div.style.backgroundColor = "lightgray";
		div.style.width = "100px";
		div.style.height = "100px";
		div.style.margin = "10px";
		div.style.float = "left";
		div.setAttribute( "onclick", "playAudio(" + i + ")" );
		document.body.appendChild(div);

	}

	console.log("Divs Added!");
}
function playAudio(i){
	sounds[i].currentTime = 0;
	sounds[i].play();
	console.log("Played!");
}