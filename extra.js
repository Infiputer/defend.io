var c = document.getElementById("myCanvas");
var chat = document.getElementById("chat");

allmsgs = [];

var grass = new Image();
grass.src = 'images/grass.png';

var castleimg = new Image();
castleimg.src = 'images/castle.svg';

var playerimg = new Image();
playerimg.src = 'images/player.svg';

var wallimg = new Image();
wallimg.src = 'images/wall.svg';

var treeimg = new Image();
treeimg.src = 'images/tree.svg';

function setSize() {
	c.width = window.innerWidth - 20;
	c.height = window.innerHeight - 30;
	width = window.innerWidth - 20;
	height = window.innerHeight - 30;
	maxLen = Math.max(width, height);
}
setSize()
window.onresize=setSize;

mobileButtons = []
function onMobileDown(x){
	event.preventDefault()
	mobileButtons.push(x)
}
function onMobileUp(x){
	event.preventDefault()
	mobileButtons = mobileButtons.filter(function(y){
			return x!=y
	})
}

let details = navigator.userAgent;


let regexp = /android|iphone|kindle|ipad/i;

let isMobileDevice = regexp.test(details);

if (isMobileDevice) {
	document.getElementById("mobileButtons").innerHTML += `<style>
#buttonW{				
	left: 10%;
	bottom: 20%;
}
#buttonA{				
	left: 0%;
	bottom: 10%;
}
#buttonS{
	left: 10%;
	bottom: 0%;
}
#buttonD{
	left: 20%;
	bottom: 10%;
}
.mobileButton{
	z-index:100;
	position: absolute;
	font-family:consolas;
	height:10%;
	width:10%;
 	user-select: none;
}
</style>
<button id = "buttonW" class = "mobileButton" ontouchstart = "onMobileDown(this.innerText)" ontouchend = "onMobileUp(this.innerText)">W</button>
<button id = "buttonA" class = "mobileButton" ontouchstart = "onMobileDown(this.innerText)" ontouchend = "onMobileUp(this.innerText)">A</button>
<button id = "buttonS" class = "mobileButton" ontouchstart = "onMobileDown(this.innerText)" ontouchend = "onMobileUp(this.innerText)">S</button>
<button id = "buttonD" class = "mobileButton" ontouchstart = "onMobileDown(this.innerText)" ontouchend = "onMobileUp(this.innerText)">D</button>`
}

var ctx = c.getContext("2d");

function keypress(event) {
  key = event.keyCode;
	keymap[event.keyCode] = event.type == 'keydown';
	for(k2 in keymap){
		if(keymap[k2]==false){
			delete keymap[k2];
		}
	}
}

function constrain(val, min_val, max_val){
    return Math.min(max_val, Math.max(min_val, val))
}

function mathmap(x, in_min, in_max, out_min, out_max) {
		return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

document.addEventListener('keyup', keypress);

setTimeout(function(){
	console.log(" ▄▄▄▄▄▄▄▄▄▄   ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄        ▄  ▄▄▄▄▄▄▄▄▄▄      ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄           \n▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░▌      ▐░▌▐░░░░░░░░░░▌    ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌          \n▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░▌░▌     ▐░▌▐░█▀▀▀▀▀▀▀█░▌    ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌          \n▐░▌       ▐░▌▐░▌          ▐░▌          ▐░▌          ▐░▌▐░▌    ▐░▌▐░▌       ▐░▌        ▐░▌     ▐░▌       ▐░▌          \n▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌ ▐░▌   ▐░▌▐░▌       ▐░▌        ▐░▌     ▐░▌       ▐░▌          \n▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌  ▐░▌  ▐░▌▐░▌       ▐░▌        ▐░▌     ▐░▌       ▐░▌          \n▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░▌   ▐░▌ ▐░▌▐░▌       ▐░▌        ▐░▌     ▐░▌       ▐░▌          \n▐░▌       ▐░▌▐░▌          ▐░▌          ▐░▌          ▐░▌    ▐░▌▐░▌▐░▌       ▐░▌        ▐░▌     ▐░▌       ▐░▌          \n▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░▌          ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌     ▐░▐░▌▐░█▄▄▄▄▄▄▄█░▌ ▄  ▄▄▄▄█░█▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌          \n▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌▐░▌          ▐░░░░░░░░░░░▌▐░▌      ▐░░▌▐░░░░░░░░░░▌ ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌          \n ▀▀▀▀▀▀▀▀▀▀   ▀▀▀▀▀▀▀▀▀▀▀  ▀            ▀▀▀▀▀▀▀▀▀▀▀  ▀        ▀▀  ▀▀▀▀▀▀▀▀▀▀   ▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀           \n                                                                                                                     \n ▄▄▄▄▄▄▄▄▄▄   ▄         ▄                                                                                            \n▐░░░░░░░░░░▌ ▐░▌       ▐░▌                                                                                           \n▐░█▀▀▀▀▀▀▀█░▌▐░▌       ▐░▌                                                                                           \n▐░▌       ▐░▌▐░▌       ▐░▌                                                                                           \n▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌                                                                                           \n▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌                                                                                           \n▐░█▀▀▀▀▀▀▀█░▌ ▀▀▀▀█░█▀▀▀▀                                                                                            \n▐░▌       ▐░▌     ▐░▌                                                                                                \n▐░█▄▄▄▄▄▄▄█░▌     ▐░▌                                                                                                \n▐░░░░░░░░░░▌      ▐░▌                                                                                                \n ▀▀▀▀▀▀▀▀▀▀        ▀                                                                                                 \n                                                                                                                     \n ▄▄▄▄▄▄▄▄▄▄▄  ▄▄        ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄         ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄ \n▐░░░░░░░░░░░▌▐░░▌      ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌\n ▀▀▀▀█░█▀▀▀▀ ▐░▌░▌     ▐░▌▐░█▀▀▀▀▀▀▀▀▀  ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░▌       ▐░▌ ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌\n     ▐░▌     ▐░▌▐░▌    ▐░▌▐░▌               ▐░▌     ▐░▌       ▐░▌▐░▌       ▐░▌     ▐░▌     ▐░▌          ▐░▌       ▐░▌\n     ▐░▌     ▐░▌ ▐░▌   ▐░▌▐░█▄▄▄▄▄▄▄▄▄      ▐░▌     ▐░█▄▄▄▄▄▄▄█░▌▐░▌       ▐░▌     ▐░▌     ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌\n     ▐░▌     ▐░▌  ▐░▌  ▐░▌▐░░░░░░░░░░░▌     ▐░▌     ▐░░░░░░░░░░░▌▐░▌       ▐░▌     ▐░▌     ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌\n     ▐░▌     ▐░▌   ▐░▌ ▐░▌▐░█▀▀▀▀▀▀▀▀▀      ▐░▌     ▐░█▀▀▀▀▀▀▀▀▀ ▐░▌       ▐░▌     ▐░▌     ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀█░█▀▀ \n     ▐░▌     ▐░▌    ▐░▌▐░▌▐░▌               ▐░▌     ▐░▌          ▐░▌       ▐░▌     ▐░▌     ▐░▌          ▐░▌     ▐░▌  \n ▄▄▄▄█░█▄▄▄▄ ▐░▌     ▐░▐░▌▐░▌           ▄▄▄▄█░█▄▄▄▄ ▐░▌          ▐░█▄▄▄▄▄▄▄█░▌     ▐░▌     ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌      ▐░▌ \n▐░░░░░░░░░░░▌▐░▌      ▐░░▌▐░▌          ▐░░░░░░░░░░░▌▐░▌          ▐░░░░░░░░░░░▌     ▐░▌     ▐░░░░░░░░░░░▌▐░▌       ▐░▌\n ▀▀▀▀▀▀▀▀▀▀▀  ▀        ▀▀  ▀            ▀▀▀▀▀▀▀▀▀▀▀  ▀            ▀▀▀▀▀▀▀▀▀▀▀       ▀       ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀ ")
}, 500)
sounddict = {};
function playSound(filename){
	soundeffectAudio = new Audio('/sounds/'+filename);
	soundeffectAudio.play();
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
function getDistance(x1, y1, x2, y2) {
		let y = x2 - x1;
		let x = y2 - y1;
		return Math.sqrt(x * x + y * y);
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
shake1=-1;
shake2=-1;
function shakeScreen(){
	clearInterval(shake1);
	clearInterval(shake2);
    shake1 = setInterval(function(){
			document.getElementById("myCanvas").style.transform="rotateZ("+0.1+"deg)";
		}, 100)
    setTimeout(function(){
        shake2 = setInterval(function(){
					document.getElementById("myCanvas").style.transform="rotateZ("+(-0.1)+"deg)";
				}, 100)
    }, 50);
    setTimeout(function(){clearInterval(shake1); clearInterval(shake2); document.getElementById("myCanvas").style.transform="rotateZ(0deg)";}, 200);
}

