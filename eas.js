const container = document.querySelector('.container');
container.style.display = "flex";
container.style.justifyContent = "center";

for (let i = 0; i < 16; i++) {
	const col = document.createElement('div');
	col.style.display = "flex";
	col.style.flexDirection = "column";
	col.style.justifyContent = "center";
	col.style.border = "1px solid black";
	col.style.flex = "0 0 40px";
	col.style.boxSizing = "border-box";

	for (let j = 0; j < 16; j++) {
		const row = document.createElement('div');
		row.style.border = "1px solid black";
		row.style.flex = "0 0 40px";
		row.style.boxSizing = "border-box";
		col.appendChild(row);

	}
	container.appendChild(col);
}