<link rel="icon" href="favicon.ico?v1" type="image/x-icon" />
<link rel="shortcut icon" href="favicon.ico?v1" type="image/x-icon" />
<head>
	<title>Play Defend.io!</title>
	<meta name="description" content="Conquer as many castles as you can. Defend your castles. Play with other gamers. Become the most guarded player. Made by Infiputer!!" />
<meta http-equiv='content-language' content='en-gb'>
</head>
<link rel="stylesheet" type="text/css" href="index.css" media="screen" />
<img src = "http://defendio.herokuapp.com/images/castle.svg" id = "img1" alt="castle">
<img src = "http://defendio.herokuapp.com/images/castle.svg" id = "img2" alt="castle">
<center>
<h1 id = "title">Defend.io</h1>
<form action="play.php" method="get">
	<input id="GET-name" type="text" name="name" maxlength="20"  placeholder = "Enter nickname" required>
	<input type="submit" value="Play" id = "b">
</form>


<p>
	<div id = "tips">
		WASD to move<br>
		Click to shoot<br>
		Find castles<br>
		Conquer as many castles as possible<br>
		<b>Defend</b> your castles
	</div>
</p>

<tt><a href="privacy.php">Privacy Policy</a></tt>
</center>
<script>
	tips = [
		"WASD to move",
		"Click to shoot",
		"Find castles",
		"Conquer as many castles as possible"
	]
	tipnum = Math.floor(Math.random()*tips.length);
	function showTip(){
		document.getElementById("tips").innerHTML = tips[tipnum];
		tipnum++;
		tipnum=tipnum%tips.length;
	}
	function changeTip(){
		for(deg = 0; deg<360;deg+=30){
			setTimeout(function(x){
				console.log(x)
				document.getElementById("tips").style.transform="rotateX("+x+"deg)";
			}, deg*10, deg)
		}
		setTimeout(showTip, 700);
	}
	changeTip();
	setInterval(changeTip, 5000);
</script>
<?php
exec("curl 'http://defendws.herokuapp.com/'");
?>