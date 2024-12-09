const btn = document.getElementById('colorTheme');
const color = document.body.style.backgroundColor;

function theme () {
	if (color === '#86562D') {
	document.body.style.backgroundColor = "black";
	console.log('This is a successful log for changing the color from brown to grey');
}
 else if (color === 'grey') {
	 document.body.text.color = "grey"
	 document.body.style.backgroundColor = '#86592D';
	 console.log('This mean the statement for changing the color from grey to brown executed');
}
 else {
	console.log('this means the function is not executing as designed');
	console.log(document.body.style.backgroundColor);
	document.body.style.backgroundColor= "white";
 }
}

/*btn.addEventListener('click', function () {
	theme();
	
});*/