function sample() {
	console.log("Sample function");
}

const sample2 = () => {
	console.log("Sample function 2");
}

const sample3 = function() {
	console.log("Sample function 3");
}

sample();
sample2();
sample3();

const el = document.getElementById("demo");
el.innerText = "Paragraph text changed";