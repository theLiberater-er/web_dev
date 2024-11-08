//making a not complicated rock paper scissors game *edit: turns out it can only be so simple. an if statement nested inside a switch case seems to be the most efficient way to write this code. 
//Edited the code to where it acts as a loop where the user can play as many rounds of R,P,S as much as they want. when they click cancel, the loop ends.
do {
var play = confirm("Do you want to play rock, paper, scissors?");
if (play === true) {
	var userInput = prompt("Choose one: rock, paper, or scissors").toLowerCase();
	let cpuChoice = ["rock", "paper", "scissors"];
	let cpuInput = cpuChoice[Math.floor(Math.random() * 3)];
switch (userInput) {
	case "rock":
	if (cpuInput === "rock") {
		console.log("Tie game!");
	}
	else if (cpuInput === "paper") {
		console.log("CPU wins!");
	}
	else if (cpuInput === "scissors") {
		console.log("User wins!");
	}
	break;
	case "paper": 
	if (cpuInput === "rock") {
		console.log("User wins!");
	}
	else if (cpuInput === "paper") {
		console.log("Tie game!");
	}
	else if (cpuInput === "scissors") {
		console.log("CPU wins!");
	}
	break;
	case "scissors":
		if (cpuInput === "rock") {
		console.log("CPU wins!");
	}
	else if (cpuInput === "paper") {
		console.log("User wins!");
	}
	else if (cpuInput === "scissors") {
		console.log("Tie game!");
		}
	break;
} 
}
else {
	console.log("You opted to not play the game. Maybe next time.");
} }

while(play === true);





/*the confirm function allows the user to hit either "OK" or "Cancel". OK produces a true boolean value and Cancel produces a boolean false value.
let soup = 'chicken noodle';
let answer = confirm("Do you want soup?");
if (answer === true) {
	console.log("Absolutely, we can make that for you");
}
else {
	console.log("Fine, we didn't want to make your soup anyway");
} */

/*prompt allows user input. clicking cancel provides a "null" value
let name = prompt("Please enter your name: ");
console.log(name); */



/* Coding Challenge 1 (~33:00);
	for (let n = 0; n < 50; n++) {
	let number = Math.floor(Math.random() * 10);
	console.log("Bryce".charAt(number));
} */
