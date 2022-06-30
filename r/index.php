<?php
	$name = $_GET["n"];
	$event = "sponsor: ".$_GET["n"].":".$_SERVER['HTTP_X_FORWARDED_FOR'];
	exec('curl "https://logger.infiputer.repl.co/api/logwrite.php?user=anishpatil@infiputer.com&pass=YC9GiX&log=defendio&event='.urlencode($event).'"');
?>
<title>Play Defend!</title>
<link rel="stylesheet" type="text/css" href="../index.css" media="screen" />
<marquee>
	<h1>
		<tt>
			<a href = "https://defend.infiputer.repl.co/">Play defend.io</a>
		</tt>
	</h1>


</marquee>
