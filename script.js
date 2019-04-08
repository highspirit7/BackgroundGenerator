var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.getElementById("ranNums");




function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
	console.log(color1.value);
	console.log(typeof(color1.value));
}


function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}



body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

css.textContent = body.style.background + ";";

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btn.addEventListener("click", function() {

	var randomColor1 = getRandomColor();
	var randomColor2 = getRandomColor();

	body.style.background = `linear-gradient(to right, ${randomColor1}, ${randomColor2})`;

	color1.value = `${randomColor1}`;
	color2.value = `${randomColor2}`;

	css.textContent = body.style.background + ";";
})




