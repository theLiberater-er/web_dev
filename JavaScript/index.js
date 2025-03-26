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
//put a line that ends the function if the user clicks Cancel on either of the prompts
let updateInput = prompt("Please enter another car brand to add");
cars.splice(numberUpdate, 0, updateInput);
document.getElementById("paragraph").innerHTML = cars;

};

buttonInput.addEventListener("click", showCars);
updateList.addEventListener('click', updatedCars);


/*let word = "Jabroni";

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