
//the confirm function allows the user to hit either "OK" or "Cancel". OK produces a true boolean value and Cancel produces a boolean false value.
let soup = 'chicken noodle';
let answer = confirm("Do you want soup?");
if (answer === true) {
	console.log("Absolutely, we can make that for you");
}
else {
	console.log("Fine, we didn't want to make your soup anyway");
}

//prompt allows user input. clicking cancel provides a "null" value
let name = prompt("Please enter your name: ");
console.log(name);



// Coding Challenge 1 (~33:00);
/* for (let n = 0; n < 50; n++) {
	let number = Math.floor(Math.random() * 10);
	console.log("Bryce".charAt(number));
} */
