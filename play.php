<link rel="icon" href="favicon.ico?v1" type="image/x-icon" />
<link rel="shortcut icon" href="favicon.ico?v1" type="image/x-icon" /> 
<title>Defend.io</title>
<style>
	#leaderboard{
		z-index: 9;
		position:absolute;
		font-family: consolas;
		-webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
	}
	#chatwrapper{
		z-index: 9;
		position:absolute;
		right: 100px;
		font-family: consolas;
		-webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
		border-style: ridge;
		background: white;
	}
	#chat{
		position: absoulute;
		
	}
	#myCanvas{
		-webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
	}
</style>
<body onkeypress="keypress(event)" onkeydown="keypress(event)">
<div id = "leaderboard"></div>
<div id = "chatwrapper">
	<div id = "chat">Chat</div>
	<input onChange="sendMsg(this.value);" id = "chatinput">
</div>
<div id = "mobileButtons"></div>
<canvas id="myCanvas" onclick = "canvas_click()" style="border:1px solid #d3d3d3;"></canvas>


<script>
	var myname = <?php echo json_encode($_GET["name"]) ?>;
	if(myname.length>20){
		myname = myname.substring(0, 20);
	}
</script>

<script src = "extra.js"></script>
<script src = "index.js"></script>
<script src = "multiplayer.js"></script>


</body>

