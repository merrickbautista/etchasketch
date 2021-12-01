const body = document.querySelector('body');
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.justifyContent = "center";
body.style.alignItems = "center";

const clearButton = document.createElement('button');
clearButton.innerText = "Clear";
clearButton.style.fontSize = "4vh";
clearButton.style.margin = "1vh auto";
clearButton.addEventListener('click', function() {
	let pixels = document.querySelectorAll('.pixel');
	pixels.forEach(pixel => pixel.remove());
	let size = 101;
	while (size > 100 || size < 1) {
		size = prompt("Enter number of squares (max: 100)");
	}
	generatePixels(size);
});
body.appendChild(clearButton);

const container = document.createElement('div');
container.classList.add('container');
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.boxSizing = "border-box";
container.style.border = "5px solid red";
container.style.width = "85vh";
container.style.height = "85vh";
body.appendChild(container);

generatePixels(16);

function generatePixels(num) {
	for (let i = 0; i < num*num; i++) {
		let pixel = document.createElement('div');
		pixel.classList.add("pixel");
		pixel.style.border = "0.5px dotted gray";
		pixel.style.boxSizing = "border-box";
		pixel.style.height = `calc(100% / ${num})`;
		pixel.style.width = `calc(100% / ${num})`;

		pixel.addEventListener('mouseenter', function() {
			this.style.backgroundColor = "black";
		});
		container.appendChild(pixel);
	}
}

