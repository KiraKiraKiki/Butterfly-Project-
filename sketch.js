// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/060-butterfly-wings.html
let yoff = 1;

// Declare RGB variables globally
let r = 100;
let g = 20;
let b = 0;

// Declare isPaused globally
let isPaused = false;

function setup() { 
	createCanvas(1400, 400);
	isPaused = false;
}

function draw() {
	if (isPaused) {
		// Draw PAUSED stuff
		push(); // We don't want to have side effects when we aren't paused
		textSize(100);
		stroke("black");
		fill("white");
		textFont("Impact");
		textAlign(CENTER, CENTER);
		text("PAUSED", width / 2, height / 2);
		pop(); // Clear our drawing changes
	} else {
		// Draw the regular stuff

		if (frameCount % 100 == 51) {
			backroundR = random(255);
			backroundG = random(255);
			backroundB = random(255);
		// Use the global RGB values for the fill
		background(backroundR, backroundG, backroundB);
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
}

function keyPressed() {
	console.log("Key pressed:  " + key);
	if (key === 'p' || key === 'P') {
		console.log("hey that was the P key!");
		isPaused = !isPaused; 
	} 
}
