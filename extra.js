var c = document.getElementById("myCanvas");

var grass = new Image();
grass.src = 'images/grass.png';

var castleimg = new Image();
castleimg.src = 'images/castle.svg';

var playerimg = new Image();
playerimg.src = 'images/player.svg';


function setSize() {
		c.width = window.innerWidth - 20;
		c.height = window.innerHeight - 30;
		width = window.innerWidth - 20;
		height = window.innerHeight - 30;
}
setSize()
var ctx = c.getContext("2d");



function shakeScreen(){
	
}

function keypress(event) {
  key = event.keyCode;
	keymap[event.keyCode] = event.type == 'keydown';
	for(k2 in keymap){
		if(keymap[k2]==false){
			delete keymap[k2];
		}
	}
}

function mathmap(x, in_min, in_max, out_min, out_max) {
		return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

document.addEventListener('keyup', keypress);

setTimeout(function(){
	console.log(" ▄▄▄▄▄▄▄▄▄▄   ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄        ▄  ▄▄▄▄▄▄▄▄▄▄      ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄           \n▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░▌      ▐░▌▐░░░░░░░░░░▌    ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌          \n▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░▌░▌     ▐░▌▐░█▀▀▀▀▀▀▀█░▌    ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌          \n▐░▌       ▐░▌▐░▌          ▐░▌          ▐░▌          ▐░▌▐░▌    ▐░▌▐░▌       ▐░▌        ▐░▌     ▐░▌       ▐░▌          \n▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌ ▐░▌   ▐░▌▐░▌       ▐░▌        ▐░▌     ▐░▌       ▐░▌          \n▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌  ▐░▌  ▐░▌▐░▌       ▐░▌        ▐░▌     ▐░▌       ▐░▌          \n▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░▌   ▐░▌ ▐░▌▐░▌       ▐░▌        ▐░▌     ▐░▌       ▐░▌          \n▐░▌       ▐░▌▐░▌          ▐░▌          ▐░▌          ▐░▌    ▐░▌▐░▌▐░▌       ▐░▌        ▐░▌     ▐░▌       ▐░▌          \n▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░▌          ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌     ▐░▐░▌▐░█▄▄▄▄▄▄▄█░▌ ▄  ▄▄▄▄█░█▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌          \n▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌▐░▌          ▐░░░░░░░░░░░▌▐░▌      ▐░░▌▐░░░░░░░░░░▌ ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌          \n ▀▀▀▀▀▀▀▀▀▀   ▀▀▀▀▀▀▀▀▀▀▀  ▀            ▀▀▀▀▀▀▀▀▀▀▀  ▀        ▀▀  ▀▀▀▀▀▀▀▀▀▀   ▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀           \n                                                                                                                     \n ▄▄▄▄▄▄▄▄▄▄   ▄         ▄                                                                                            \n▐░░░░░░░░░░▌ ▐░▌       ▐░▌                                                                                           \n▐░█▀▀▀▀▀▀▀█░▌▐░▌       ▐░▌                                                                                           \n▐░▌       ▐░▌▐░▌       ▐░▌                                                                                           \n▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌                                                                                           \n▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌                                                                                           \n▐░█▀▀▀▀▀▀▀█░▌ ▀▀▀▀█░█▀▀▀▀                                                                                            \n▐░▌       ▐░▌     ▐░▌                                                                                                \n▐░█▄▄▄▄▄▄▄█░▌     ▐░▌                                                                                                \n▐░░░░░░░░░░▌      ▐░▌                                                                                                \n ▀▀▀▀▀▀▀▀▀▀        ▀                                                                                                 \n                                                                                                                     \n ▄▄▄▄▄▄▄▄▄▄▄  ▄▄        ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄         ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄ \n▐░░░░░░░░░░░▌▐░░▌      ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌\n ▀▀▀▀█░█▀▀▀▀ ▐░▌░▌     ▐░▌▐░█▀▀▀▀▀▀▀▀▀  ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░▌       ▐░▌ ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌\n     ▐░▌     ▐░▌▐░▌    ▐░▌▐░▌               ▐░▌     ▐░▌       ▐░▌▐░▌       ▐░▌     ▐░▌     ▐░▌          ▐░▌       ▐░▌\n     ▐░▌     ▐░▌ ▐░▌   ▐░▌▐░█▄▄▄▄▄▄▄▄▄      ▐░▌     ▐░█▄▄▄▄▄▄▄█░▌▐░▌       ▐░▌     ▐░▌     ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌\n     ▐░▌     ▐░▌  ▐░▌  ▐░▌▐░░░░░░░░░░░▌     ▐░▌     ▐░░░░░░░░░░░▌▐░▌       ▐░▌     ▐░▌     ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌\n     ▐░▌     ▐░▌   ▐░▌ ▐░▌▐░█▀▀▀▀▀▀▀▀▀      ▐░▌     ▐░█▀▀▀▀▀▀▀▀▀ ▐░▌       ▐░▌     ▐░▌     ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀█░█▀▀ \n     ▐░▌     ▐░▌    ▐░▌▐░▌▐░▌               ▐░▌     ▐░▌          ▐░▌       ▐░▌     ▐░▌     ▐░▌          ▐░▌     ▐░▌  \n ▄▄▄▄█░█▄▄▄▄ ▐░▌     ▐░▐░▌▐░▌           ▄▄▄▄█░█▄▄▄▄ ▐░▌          ▐░█▄▄▄▄▄▄▄█░▌     ▐░▌     ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌      ▐░▌ \n▐░░░░░░░░░░░▌▐░▌      ▐░░▌▐░▌          ▐░░░░░░░░░░░▌▐░▌          ▐░░░░░░░░░░░▌     ▐░▌     ▐░░░░░░░░░░░▌▐░▌       ▐░▌\n ▀▀▀▀▀▀▀▀▀▀▀  ▀        ▀▀  ▀            ▀▀▀▀▀▀▀▀▀▀▀  ▀            ▀▀▀▀▀▀▀▀▀▀▀       ▀       ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀ ")
}, 500)

function playSound(filename){
	let playsoundfile = new Audio('/sounds/'+filename);
	playsoundfile.play();
}

let interval;

if (!('ongamepadconnected'in window)) {
		// No gamepad events available, poll instead.
		interval = setInterval(pollGamepads, 500);
}

function pollGamepads() {
		const gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
		for (let i = 0; i < gamepads.length; i++) {
				const gp = gamepads[i];
				if (gp) {
					 console.log("Gamepad connected at index " + gp.index + ": " + gp.id + ". It has " + gp.buttons.length + " buttons and " + gp.axes.length + " axes.");
						gameLoop();
						clearInterval(interval);
				}
		}
}
controllerMoved=true;
function gameLoop() {
		const gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);
		if (!gamepads) {
				return;
		}
		playerX+=gamepads[0].axes[0]*speed;
		playerY+=gamepads[0].axes[1]*speed;
		controllerMoved=true;
		mouseX = gamepads[0].axes[2]*width/4+width/2;
		mouseY = gamepads[0].axes[3]*height/4+height/2;
		if(gamepads[0].buttons[7].pressed){
			launchArrow();
		}
		if(gamepads[0].buttons[6].pressed){
			speed=4;
		}
		else{
			speed=2;
		}
		direction = Math.atan2(
			mouseY-(height/2),
			mouseX-(width/2),
		)
		start = requestAnimationFrame(gameLoop);
}
setInterval(function(){
	if(controllerMoved){
		controllerMoved=false;
		moveMe(playerX, playerY, direction);
	}
}, 100)

function circle(x, y, radius, color){
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, 2 * Math.PI);
	ctx.fill();
}

function rect(x, y, height, width, color) {
		ctx.fillStyle = color;
		ctx.fillRect((x - width / 2), (y - height / 2), width, height)
}