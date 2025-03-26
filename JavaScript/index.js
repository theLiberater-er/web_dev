/* This set of code adds 1 to whatever number is submitted by the user
let input = prompt("Please enter a number:");
console.log("This is right before the function is created");
let number = Number(input) + 1;
function math() {
	console.log("This is a console entry when the function is running");
	window.alert("Here is what " + input + " + 1 equals: " + number);
	console.log("The Number() function is used to convert strings to integers for mathmatical operation");
	
}
console.log("This is right after the function is created");
document.getElementById("button").addEventListener("click", math());
*/
let buttonInput = 



/* The below set of code is used to add different cars to the cars array using window prompts -- not complete

let buttonInput = document.getElementById("button");
let updateList = document.getElementById('updateList');
let cars = ["Ford","GMC","Chevy","Volkswagen","Cadillac"];

function showCars() {
  document.getElementById("paragraph").innerHTML = cars;

};

function updateAmount() {
//need to figure out how to update the numberUpdate value to however many itens the user wants to add.
//The issue is that this function has to go first before updatedCars, but the numberUpdate variable is 
//not called until that function. Might just need to reorg

};

function updatedCars() {
let numberUpdate = prompt('How many cars do you want to add?');
if (numberUpdate === null) { //ends the function if 'Cancel' is clicked instead of next
	console.log(numberUpdate); 
	return;
};
let updateInput = prompt("Please enter another car brand to add");
cars.splice(numberUpdate, 0, updateInput);
document.getElementById("paragraph").innerHTML = cars;

};

buttonInput.addEventListener("click", showCars);
updateList.addEventListener('click', updatedCars);

*/


/* below code is just other projects, disregard

let word = "Jabroni";

switch (word) {
  case 'Jabroni':
    alert("Patron Tequila");
	break;
  case 'School Counselor':
    alert("Anything with Alcohol");
	break;
  case 'Programmer':
    alert("Hipster Craft Beer");
	break;
  case 'Bike Gang Member':
	alert("Moonshine");
	break;
  case 'Politician':
	alert("Your tax dollars");
	break;
  case 'Rapper':
	alert("Cristal");
	break;
  default:
    alert("Beer");
} */

