const btn = document.getElementById('btn');
const btn_white = document.getElementById('btn_white');
const color = document.body.style.backgroundColor;
const header = document.getElementById('myHeader');

function theme () {
	if (color === 'white') {
	document.getElementById("myHeader").style.color = "white";
	color.append("black"); //document.body.style.backgroundColor = "black";
}
 else {
	 document.getElementById("myHeader").style.color = "black"
	 document.body.style.backgroundColor = 'white';
}

console.log(color);
	}
//function lightMode () {
	//document.getElementById("myHeader").style.color = "black"
	//document.body.style.backgroundColor = 'white';
	
//}

btn.addEventListener('click', function () {
	theme();
});

console.log(color);






/*const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector('.color');

function getRandomNumber(){
	return Math.random();
}

btn.addEventListener("click", function () {
	//Get random number btw 0 and 3;
	const randomNumber = getRandomNumber();
	
	document.body.style.backgroundColor = colors[randomNumber];
	color.textContent = colors[randomNumber];
	
}); */

