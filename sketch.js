// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/060-butterfly-wings.html
let yoff = 1;

// Declare RGB variables globally
let r = 255;
let g = 0;
let b = 0;

function setup() {
	createCanvas(700, 700);
}

function draw() {
	background(300);
	translate(width / 2, height / 2);

	stroke(200);
	// Use the global RGB values for the fill
	fill(r, g, b);  
	strokeWeight(9);

	let da = PI / 100;
	let dx = 0.05;

	let xoff = 0;
	beginShape();
	for (let a = 0; a <= TWO_PI; a += da) {
		let n = noise(xoff, yoff);
		let r = sin(2 * a) * map(n, 0, 1, 50, 300);
		let x = r * cos(a);
		let y = r * sin(a);
		if (a < PI) {
			xoff += dx;
		} else {
			xoff -= dx;
		}
		//point(x, y);
		vertex(x, y);
	}
	endShape();

	yoff += 0.01;

	// Update the color over time
	r = (r + 1) % 256;
	g = (g + 2) % 256;
	b = (b + 3) % 256;
}