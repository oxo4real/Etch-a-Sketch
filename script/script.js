document.addEventListener("DOMContentLoaded", function() {
	let grid_size = 16;
	let rgb = false;
	let mousDown = false;
	creat_grid();

	document.querySelector("#clear").onclick = clear;

	let rgb_button = document.querySelector("#rgb");
	rgb_button.onclick = rgbOn;

	document.querySelector("#changegrid").onclick = function() {
		do {
			grid_size = Number(prompt("Enter a number between 1 and 100"));
		} while (!(grid_size >= 1 && grid_size <= 100));
		document.querySelector("#grid").innerHTML = "";''
		creat_grid();
	}
	
	document.addEventListener("mousedown", function() {
		mousDown = true;
	});

	document.addEventListener("mouseup", function() {
		mousDown = false;
	});

	document.querySelectorAll("*").setAttribute("draggable", "false");

	function clear() {
		const cells = document.querySelectorAll(".cell");
		cells.forEach(function(cell) {
			cell.style.backgroundColor = "white";
		});
	};

	function rgbOn() {
		rgb_button.innerHTML = "RGB Off";
		rgb_button.onclick = rgbOff;
		rgb = true;
	}

	function rgbOff() {
		rgb_button.innerHTML = "RGB On";
		rgb_button.onclick = rgbOn;
		rgb = false;
	}

	function creat_grid() {
		let grid = document.querySelector("#grid");
		for (let i = grid_size * grid_size; i > 0; i -= 1) {
			let div = document.createElement("div");
			let div_size = Math.floor((580.0 / grid_size) * 10) / 10;
			Object.assign(div.style, {
				height: `${div_size}px`,
				width: `${div_size}px`,
				backgroundColor: `white`
			});
			// div.setAttribute("draggable", "false");
			grid.appendChild(div);
			div.addEventListener("mouseover", function() {
				if (mousDown) {	
					if (!rgb) {
						div.style.backgroundColor = "black";
					} else {
						div.style.backgroundColor = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`;
					}
				}
			});
			div.addEventListener("mousedown", function() {
				if (!rgb) {
					div.style.backgroundColor = "black";
				} else {
					div.style.backgroundColor = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`;
				}
			});
			div.classList.add("cell")
		}
	}
})