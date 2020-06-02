var color1 = document.getElementsByTagName('input')[0];
var color2 = document.getElementsByTagName('input')[1];
var body = document.getElementById("gradient");

color1.addEventListener("input", function(){
	console.log(color1.value);
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value+ ")";
});

color2.addEventListener("input", function(){
	console.log(color2.value);
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value+ ")";
});

