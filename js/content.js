// Javascript File

//$ is JQuery selector. Essentially grabs something from webpage.
//Code inside this evaluates once page loads.

var username;
var password;

function getCredentials() {
	username = localStorage.getItem('username');
	password = localStorage.getItem('password');
	if (username && password) {
		return true;
	} else {
		return false;
	}
}

function setCredentials(username, password) {
	localStorage.setItem('username', username);
	localStorage.setItem('password', password);
}

$(document).ready(function() {
	//alert('This page is loaded!');
	//$('input#username').val('haha');

	var hasCredentials = getCredentials();
	if (hasCredentials && $('.error').length == 0) {
		// Autofill the user's login.
		$('input#username').val(username);
		$('input#password').val(password);
		$('input.button').click();
	} else {
		// No credentials saved; wait
		$('#loginForm').submit(function () {
			username = $('input#username').val();
			password = $('input#password').val();
			setCredentials(username, password);
		});
	}
});


