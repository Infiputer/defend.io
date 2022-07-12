<link rel="icon" href="favicon.ico?v1" type="image/x-icon" />
<link rel="shortcut icon" href="favicon.ico?v1" type="image/x-icon" />
<head>
	<title>Play Defend.io!</title>
	<meta name="description" content="Defend.io is a multiplayer game. Conquer castes and shoot enemies. Defend your castles from getting stolen. Play Defend.io! Made by Infiputer!!" />
	<meta property="og:type" content="website">
	
	<meta property="image" content="https://defendio.herokuapp.com/images/defendiocover.png">
	<meta property="og:image" content="https://defendio.herokuapp.com/images/defendiocover.png">

	<meta property="og:type" content="website">
	<meta property="og:url" content="https://defendio.herokuapp.com/">
	<meta property="og:title" content="Play Defend.io!">
	<meta property="og:description" content="Play Defend.io with me!">
</head>

<body background = "images/defendiocover.png">
<link rel="stylesheet" type="text/css" href="index.css" media="screen" />

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
<h1><tt><a href = "https://defendio.herokuapp.com/">Offical version</a><br></tt></h1>
<tt><a href="privacy.php">Privacy Policy</a></tt>
</center>
<script>
	tips = [
		"WASD to move",
		"Click to shoot",
		"Find castles",
		"Conquer castles",
		"Walls stop bullets",
		"Made by Infiputer"
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
</body>