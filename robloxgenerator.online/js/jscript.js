
var randomnumber = setInterval(randomuser,6000)

function randomuser() {
document.getElementById("randomnumber").innerHTML = Math.floor(Math.random() * 101);
}

var feednames = ["70.35.197.74", "52.36.219.41", "52.40.124.206", "192.129.242.174", "107.181.80.178", "65.74.171.129", "35.160.228.40", "47.91.110.111"];

	

    setInterval(function () {
        $(".feed").fadeOut(4000, function () {
			var itemfeednames = feednames[Math.floor(Math.random()*feednames.length)];
			var feed = '<span style="color: green;"><strong>' + itemfeednames +  '</strong></span> Generated Resources Now';
			$(this).html(feed).fadeIn(1500);
        });
    }, 1);
    
function move() {
	var username = document.getElementById("username").value;
	var lootbox = document.getElementById("lootbox").value;
	if(username=="") {
		alert('Please insert your Roblox username');
		return false;
	}

	document.getElementById("fillup").style.display = "none";
	document.getElementById("progressbarcontainer").style.display = "block";
	var elem = document.getElementById("progressbar");
	var width = 10;
	var id = setInterval(frame, 369);
	function frame() {
		if (width > 0 && width < 10) {
			document.getElementById("progresslog").innerHTML = "Simulate "+device+" device";
		}

		if (width > 10 && width < 20) {
			document.getElementById("progresslog").innerHTML = "Connecting to Roblox server";
		}

		if (width > 20 && width < 30) {
			document.getElementById("progresslog").innerHTML = "Connection to server established";
		}

		if (width > 30 && width < 40) {
			document.getElementById("progresslog").innerHTML = "Connecting to username: "+username+"";
		}

		if (width > 40 && width < 50) {
			document.getElementById("progresslog").innerHTML = "Connection to username: "+username+" established";
		}

		if (width > 60 && width < 70) {
			document.getElementById("progresslog").innerHTML = "Adding selected amount of Resources";
		}

		if (width > 80 && width < 90) {
			document.getElementById("progresslog").innerHTML = "Selected amount of Resources ready to be added";
		}

		if (width > 90 && width <= 91) {
			document.getElementById("progresslog").innerHTML = "Processing";
		}

		if (width > 91 && width <= 92) {
			document.getElementById("progresslog").innerHTML = "Processing.";
		}

		if (width > 92 && width <= 93) {
			document.getElementById("progresslog").innerHTML = "Processing..";
		}

		if (width > 93 && width <= 94) {
			document.getElementById("progresslog").innerHTML = "Processing...";
		}

		if (width > 94 && width <= 95) {
			document.getElementById("progresslog").innerHTML = "Processing";
		}

		if (width > 95 && width <= 96) {
			document.getElementById("progresslog").innerHTML = "Processing.";
		}

		if (width > 96 && width <= 97) {
			document.getElementById("progresslog").innerHTML = "Processing..";
		}

	    if (width >= 99) {
	    	document.getElementById("progresslog").innerHTML = "Processing...";
	    	setTimeout(verify, 1000);
			clearInterval(id);
	    } else {
			width++;
			elem.style.width = width + '%';
			document.getElementById("progressbarlabel").innerHTML = width * 1  + '%';
			}
	}
}

function verify() {

	document.getElementById("verifybg").style.height = "100%";

}

var randomnumber = setInterval(randomuser,6000)

function randomuser() {
document.getElementById("randomnumber").innerHTML = Math.floor(Math.random() * 101);
}