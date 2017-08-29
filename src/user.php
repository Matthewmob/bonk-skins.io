<?php session_start(); ?>
<!DOCTYPE html>
<html>
	<head>
		<title>User - Bonk-Skins.io</title>

		<!-- Typefaces -->
		<link rel="stylesheet prefetch" href="https://fonts.googleapis.com/css?family=Titillium+Web:700" />
		<link rel="stylesheet prefetch" href="https://fonts.googleapis.com/css?family=Roboto" />
		<script src="https://use.fontawesome.com/12aad66375.js" defer></script>

		<!-- Favicon -->
		<link rel="apple-touch-icon" sizes="180x180" href="./assets/favicon/apple-touch-icon.png">
		<link rel="icon" type="image/png" href="./assets/favicon/favicon-32x32.png" sizes="32x32">
		<link rel="icon" type="image/png" href="./assets/favicon/favicon-16x16.png" sizes="16x16">
		<link rel="manifest" href="./assets/favicon/manifest.json">
		<link rel="mask-icon" href="./assets/favicon/safari-pinned-tab.svg" color="#5bbad5">

		<link rel="stylesheet" type="text/css" href="./styles/css/user.css" />
	</head>
	<body>
		<noscript>
			<h1>This website requires Javascript to be functional. Sorry :(</h1>
		</noscript>
		<div id="header">
			<?php
				include "./assets/imports/logo.php";
				include "./assets/imports/loginsignup/headerinfo.php";
			?>
			<a id="makeaskin" class="button raised" href="editor">Make a skin</a>
		</div>
	</body>
</html>
<!-- <span class="user disabled">MatthewMob <span class="totalScore ">(0)</span></span> -->