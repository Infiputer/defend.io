
let socket = new WebSocket("wss://defendws.herokuapp.com/");

id = "";

lose = false;

isconnected=false;


players = []

socket.onopen = function(e) {
	isconnected=true;
  console.log("[open] Connection established");
  socket.send("name "+myname);
};

function createPlayers(){
	ctx.clearRect(0, 0, width, height)
	for(xgrass=-6000;xgrass<6000;xgrass+=500){
		for(ygrass=-6000;ygrass<6000;ygrass+=500){
			ctx.drawImage(grass, xgrass-playerX+width/2, ygrass-playerY+height/2);
		}
	}
  ctx.lineWidth = "600";
  ctx.strokeStyle = "red";
  ctx.strokeRect(
		(-5250)-playerX+width/2,
		(-5250)-playerY+height/2,
		10500, 10500
	)
	ctx.strokeStyle = "black";
	ctx.lineWidth = "10";
	objects.forEach(function(play){
		//console.log(play["type"])
		if(play["type"]=="player"){
			playerpos = [
				mathmap(play["x"]-playerX, width/maxLen*-1000, width/maxLen*1000, 0, width), 
				mathmap(play["y"]-playerY, height/maxLen*-1000, height/maxLen*1000, 0, height)
			]

			if(play["id"]==id){
				if(getDistance(play["x"], play["y"], playerX, playerY)>300){//On connection drop don't movex
					playerX=play["x"];
					playerY=play["y"];
				}
				else{
					playerpos[0]=width/2;
					playerpos[1]=height/2;//force yourself at the center
				}
			}
			ctx.lineWidth = 3;
			ctx.beginPath();
			ctx.moveTo(playerpos[0]+26, playerpos[1]-75);
			ctx.lineTo(playerpos[0]+26,
								 playerpos[1]-10);
			ctx.stroke();
			
			rect(playerpos[0]+48, playerpos[1]-60, 32, 42, "black")//flag
			rect(playerpos[0]+48, playerpos[1]-60, 30, 40, play["color"])
			
			angleBetween = Math.atan2(playerpos[1]-height/2, playerpos[0]-width/2)
			if(Math.abs(playerpos[0]-width/2)>width/4 && Math.abs(playerpos[1]-height/2)>height/4){
				rect(
					(Math.cos(angleBetween)*width/2.2)+width/2,
					(Math.sin(angleBetween)*height/2.2)+height/2,
					20, 20, "black")
				rect(
					(Math.cos(angleBetween)*width/2.2)+width/2,
					(Math.sin(angleBetween)*height/2.2)+height/2,
					10, 10, play["color"])
			}
			for(g in play["guards"]){
				guardpos = [
					mathmap(play["guards"][g][0]-playerX, width/maxLen*-1000, width/maxLen*1000, 0, width), 
					mathmap(play["guards"][g][1]-playerY, height/maxLen*-1000, height/maxLen*1000, 0, height)
				]
				rect(guardpos[0], guardpos[1], 20, 20, "black")
				rect(guardpos[0], guardpos[1], 10, 10, play["color"])
			}


		
			
			ctx.drawImage(playerimg,
										(playerpos[0])-playerimg.width/2,
										(playerpos[1])-playerimg.height/2, 
										playerimg.width,
										playerimg.height);


			ctx.restore();


			healthbar = mathmap(play["health"], 0, 100, 0, 70)
			
			rect(
				playerpos[0],
				playerpos[1]-90,
				25, 75,
				"black"
			)

			ctx.rect(playerpos[0]-35,playerpos[1]-100, healthbar, 20);
			ctx.fillStyle = "green"
			ctx.fill()

			ctx.fillStyle = "black"
			ctx.font = '10px san-serif';
    	ctx.fillText(play["name"], playerpos[0],playerpos[1]+40);

			
		}
		else if(play["type"]=="arrow"){
			arrowpos = [
				mathmap(play["x"]-playerX, width/maxLen*-1000, width/maxLen*1000, 0, width), 
				mathmap(play["y"]-playerY, height/maxLen*-1000, height/maxLen*1000, 0, height)
			]
			circle(arrowpos[0], arrowpos[1], 15, "black");
			circle(arrowpos[0], arrowpos[1], 10, "brown");
		}
		else if(play["type"]=="castle"){
			castlepos = [
				mathmap(play["x"]-playerX, width/maxLen*-1000, width/maxLen*1000, 0, width), 
				mathmap(play["y"]-playerY, height/maxLen*-1000, height/maxLen*1000, 0, height)
			]

			ctx.beginPath();
			ctx.moveTo(castlepos[0]+62, castlepos[1]-120);
			ctx.lineTo(castlepos[0]+62,
								 castlepos[1]-castleimg.height/3);
			ctx.stroke();
			
			rect(castlepos[0]+80, castlepos[1]-100, 32, 42, "black")//flag
			rect(castlepos[0]+80, castlepos[1]-100, 30, 40, play["color"])
			ctx.drawImage(castleimg,
										castlepos[0]-castleimg.width/3,
										castlepos[1]-castleimg.height/3, 
										castleimg.width/1.5,
										castleimg.height/1.5);

			
			healthbar = mathmap(play["health"], 0, 100, 0, 70)
			
			rect(
				castlepos[0],
				castlepos[1]-110,
				25, 75,
				"black"
			)

			ctx.rect(castlepos[0]-35,castlepos[1]-120, healthbar, 20);
			ctx.fillStyle = "green"
			ctx.fill()
			
			ctx.fillStyle = "black"
			ctx.font = '10px san-serif';
    	ctx.fillText(play["ownername"], castlepos[0],castlepos[1]+100);
		}
		else if(play["type"]=="wall"){
			wallpos = [
				mathmap(play["x"]-playerX, width/maxLen*-1000, width/maxLen*1000, 0, width), 
				mathmap(play["y"]-playerY, height/maxLen*-1000, height/maxLen*1000, 0, height)
			]
			ctx.drawImage(wallimg,
							wallpos[0]-wallimg.width/3,
							wallpos[1]-wallimg.height/3, 
							wallimg.width,
							wallimg.height
			);
			healthbar = mathmap(play["health"], 0, 100, 0, 70)
			
			rect(
				wallpos[0]+4,
				wallpos[1]-40,
				25, 75,
				"black"
			)

			ctx.rect(wallpos[0]-31,wallpos[1]-50, healthbar, 20);
			ctx.fillStyle = "green"
			ctx.fill()
		}
	})
}

socket.onmessage = function(event) {
	console.log("*")
	if(event.data == "lose"){
		lose=true
		document.body.innerHTML = "You lost :("
		window.location = 'http://defendio.herokuapp.com/lost.html' 
		console.log("lost")
		
	}
	else if(event.data.startsWith("move")){ // backend can force player to move to a position
		backendPos=event.data.split(" ")[1].split(",");
		playerX=parseInt(backendPos[0]);
		playerY=parseInt(backendPos[1]);
	}
	else if(event.data.startsWith("leader")){
		leaderboard = JSON.parse(event.data.substring(6))
		document.getElementById("leaderboard").innerText = JSON.stringify(leaderboard, null, '\t')
	}
	else if(event.data.startsWith("id")){
		id=event.data.split(" ")[1];
	}
	else if(event.data.startsWith("sound ")){
		playSound(event.data.split(" ")[1])
	}
	else if(event.data.startsWith("chat ")){
		chatmsg = "";
		for(msgindex in event.data.split(" ")){
			if(msgindex!=0){
				chatmsg+=event.data.split(" ")[msgindex]+' ';
			}
		}
		console.log(chatmsg)
		allmsgs.push(chatmsg);
		if(allmsgs.length>5){
			allmsgs.shift();
		}
		chat.innerText="";
		for(msg in allmsgs){
			chat.innerText+=allmsgs[msg]+"\n";
		}
	}
	else{
		objects = JSON.parse(event.data)
		createPlayers()
	}
};
cansend=true
function moveMe(myX, myY, myAngle){
	if(!isconnected){
		console.log(".")
	}
	if(!cansend){
		return;
	}
	if(!lose){
		socket.send("move "+myX+","+myY);
		socket.send("angle "+myAngle);
		cansend=false
		setTimeout(function(){cansend=true},100)
	}
}
function makeWall(){
	if(canMakeWall){
		socket.send("wall "+direction);
		setTimeout(function(){canMakeWall=true}, 1000)
	}
}
function sendMsg(m){
	socket.send("chat "+m);
	document.getElementById("chatinput").value="";
	console.log(m)
}