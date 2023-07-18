var seconds = 5;
		var countdown = setInterval(function() {
			seconds--;
			document.getElementById("countdown").innerHTML = seconds;
			if (seconds == 0) {
				clearInterval(countdown);
				window.location.href = "https://www.chateaudemoliens.com/index.html";
			}
		}, 1000);