<link rel="icon" href="favicon.ico?v1" type="image/x-icon" />
<link rel="shortcut icon" href="favicon.ico?v1" type="image/x-icon" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300&display=swap" rel="stylesheet">
<head>
	<title>Play Defend.io!</title>
	<meta name="description" content="Defend.io is a multiplayer game. Conquer castes and shoot enemies. Defend your castles from getting stolen. Play Defend.io! Made by Infiputer!!" />
	<meta property="og:type" content="website">
	
	<meta property="image" content="https://defendio.herokuapp.com/images/defendiocover.png">
	<meta property="og:image" content="https://defendio.herokuapp.com/images/defendiocover.png">

	<meta property="og:type" content="website">
	<meta property="og:url" content="https://defendio.herokuapp.com">
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
<h1><tt><a href = "http://defendio.herokuapp.com/">Offical version</a><br></tt></h1>
<tt><a href="privacy.php">Privacy Policy</a></tt>
</center>
<script>
	tips = [
		"WASD to move",
		"Click to shoot",
		"Find castles",
		"Conquer as many castles as possible",
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

<div id = "help">
	<p id = "info">Defend io is a multiplayer game. Kill opponents and capture castles for guards. Take advantage and hide under trees, or build your own walls for protection. Play Defendio today. </p>
	<h2>How to play Defendio</h2>
	<ul>
	<li>WASD to move</li>
	<li>Click to shoot</li>
	<li>E to build a wall</li>
	</ul>
	
</div>
<?php
exec("curl 'http://defendws.herokuapp.com/'");
?>
</body>