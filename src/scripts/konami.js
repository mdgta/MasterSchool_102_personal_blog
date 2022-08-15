/*
	this is purely a css & html project
	just made this little thing for you
	in case you're having a rough day ;)
	(totally not bribe hehe)
*/
;(() => {
	console.log("%cCan you solve the Konami Code?", "padding: 2px 5px; background-image: linear-gradient(to right, #fcc, #ffc, #cfc, #cff, #ccf, #fcf, #fcc); color: #333; text-shadow: 1px 1px #fff;");
	let konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
		i = 0,
		solved = false;
	addEventListener("keydown", e => {
		if (!solved) {
			if (konami[i] === e.which) {
				i++;
				if (i === konami.length) {
					solved = true;
					console.log("%cCongratulations! You've solved the Konami Code! Your reward is... a cookie --> 🍪", "padding: 2px 5px; background-image: linear-gradient(to right, #fcc, #ffc, #cfc, #cff, #ccf, #fcf, #fcc); color: #333; text-shadow: 1px 1px #fff;");
				}
			} else {
				i = 0;
			}
		}
	});
})();