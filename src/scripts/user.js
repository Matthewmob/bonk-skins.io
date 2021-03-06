var signupBut = document.getElementById("signup-button");
var loginBut = document.getElementById("login-button");
var logoutBut = document.getElementById("logout-button");

if (signupBut) {
	signupBut.addEventListener("click", function() {
		document.getElementById("signup-modal").classList.remove("disabled");
		document.querySelector("#signup-form .user-input[name=\"username\"").focus();
	});
}
if (loginBut) {
	loginBut.addEventListener("click", function() {
		document.getElementById("login-modal").classList.remove("disabled");
		document.querySelector("#login-form .user-input[name=\"username\"").focus();
	});
}
if (logoutBut) {
	logoutBut.addEventListener("click", function() {
		var httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = function() {
			if (httpRequest.readyState === XMLHttpRequest.DONE) {
				if (httpRequest.status === 200) {
					console.log(httpRequest.responseText);
					location.reload();
				}
			}
		};

		httpRequest.open("GET", "./backend/logout.php", true);
		httpRequest.send();
	});
}

// Forms
function getFormData(form) {
	var str = "";
	for (var i = 0; i < form.elements.length - 1; i++) {
		str += encodeURI(form.elements[i].name) + "=" + encodeURI(form.elements[i].value) + "&";
	}
	return str.substring(0, str.length - 1);
}
document.getElementById("signup-form").addEventListener("submit", function(evt) {
	evt.preventDefault();
	console.log("Submitting signup form...");
	var _this = this;

	var httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = function() {
		if (httpRequest.readyState === XMLHttpRequest.DONE) {
			if (httpRequest.status === 200) {
				var res = JSON.parse(httpRequest.responseText);
				console.log(httpRequest.responseText);
				document.getElementById("signup-output").classList.remove("hidden");
				document.getElementById("signup-output").innerHTML = res.text;

				if (res.type == 0 || res.type == 1) { // Username is taken or invalid.
					_this.querySelector(".user-input[name=\"username\"]").select();
				} else if (res.type == 2) { // Email is invalid.
					_this.querySelector(".user-input[name=\"email\"]").select();
				} else if (res.type == 3) { // User account creation was successful.
					var textboxes = _this.getElementsByClassName("user-input");
					for (var i = 0; i < textboxes.length; i++) {
						textboxes[i].value = "";
					}
				}
			}
		}
	};

	httpRequest.open("POST", "./backend/createacc.php", true);
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpRequest.send(getFormData(this));
});
document.getElementById("login-form").addEventListener("submit", function(evt) {
	evt.preventDefault();
	console.log("Submitting login form...");
	var _this = this;

	var httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = function() {
		if (httpRequest.readyState === XMLHttpRequest.DONE) {
			if (httpRequest.status === 200) {
				var res = JSON.parse(httpRequest.responseText);
				console.log(httpRequest.responseText);

				if (res && res.type == 0) { // Username/Password is incorrect
					var passText = _this.querySelector(".user-input[name=\"password\"]");
					passText.value = "";
					passText.focus();
					document.getElementById("login-output").classList.remove("hidden");
					document.getElementById("login-output").innerHTML = res.text;
				} else if (res.type == 1) { // Successful login
					location.reload();
				}
			}
		}
	};

	httpRequest.open("POST", "./backend/login.php", true);
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpRequest.send(getFormData(this));
});