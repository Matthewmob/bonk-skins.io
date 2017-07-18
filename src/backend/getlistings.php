<?php
	include "./assets/imports/config.php";
	$con = mysqli_connect($server_ip, $server_user, $server_password, $server_db);

	$sql = mysqli_query($con, "SELECT * FROM skins ORDER BY skin_creation");

	while ($row = mysqli_fetch_assoc($sql)) {
		echo "<a class=\"card\" href=\"editor?id=" . $row["skin_id"] . "&editable=false\">
			<img src=\"./backend/previews/" . $row["skin_id"] . ".png\" width=\"150\" />
			<div class=\"under\">
				<p>" . $row["skin_name"] . "</p>
				<p class=\"author\">" . $row["skin_author"] . "</p>
			</div>
		</a>";
	}
?>