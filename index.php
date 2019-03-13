<!DOCTYPE html> 
<html>
<head>
<meta charset="UTF-8">
<title></title>
<link rel="stylesheet" type="text/css" href="css/style.css" />
<link rel="stylesheet" type="text/css" href="css/animate.css" />
<link href="https://fonts.googleapis.com/css?family=VT323" rel="stylesheet">
</head>
<body>



	<div class="stars"></div>
	<div class="twinkling"></div>
	<div class="clouds">
	
	<div id="character-infos"></div>
		<section id="main">
			<div class="title">
				<h1>Guess who it is</h1>
			</div>
	
		<div id="answer-form">
		  <input type="text" id="answer">
		  <div id="submit">submit</div>
		</div> 
		<!-- professionnal english skill -->
		<div class="surrender surrButton">Give my tongue to the cat</div>
		<div class="reload" id="retry">Retry</div>
		<span id="surrender"></span>
	</section>	
	<div id="answerSent">
		<div id="resultat"></div>
		<div id="success">
			<div class="title-answer">
				<h1>Well done !</h1>
			</div>
			<div class="button-ans reload">Change character</div>
		</div>
		<div id="fail">
			<div class="title-answer">
				<h1>You failed</h1>
			</div>
			<div class="button-ans" id="change-character">Try again</div>
			<div class="button-ans reload">Change character</div>
		</div>
	</div>
	</div>
	<footer>
	</footer>


	<script type="text/javascript" src="js/levenshtein.js"></script>
	<script type='text/javascript' src='js/jquery.js'></script>
	<script type='text/javascript' src='js/main.js'></script>
</body>
</html>
