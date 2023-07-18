var seconds = 5;
		var countdown = setInterval(function() {
			seconds--;
			document.getElementById("countdown").innerHTML = seconds;
			if (seconds == 0) {
				clearInterval(countdown);
				window.location.href = "https://www.chateaudemoliens.com/index.html";
			}
		}, 1000);
        var seconds2 = 5;
		var countdown2 = setInterval(function() {
			seconds2--;
			document.getElementById("countdown2").innerHTML = seconds2;
			if (seconds2 == 0) {
				clearInterval(countdown);
				window.location.href = "https://www.chateaudemoliens.com/index.html";
			}
		}, 1000);