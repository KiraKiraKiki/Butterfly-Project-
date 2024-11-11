// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/060-butterfly-wings.html
let yoff = 1;

// Declare RGB variables globally
let r = 100;
let g = 20;
let b = 0;

let backgroundR = 100;
let backgroundG = 20;
let backgroundB = 0;

// Declare isPaused globally
let isPaused = false;
let butterflyPositions = [];

function setup() { 
	createCanvas(1400, 400);
	isPaused = false;
	butterflyPositions.push(createVector(width/2, height/2));
}

function draw() {
	if (isPaused) {
		// Draw PAUSED stuff
		push(); // We don't want to have side effects when we aren't paused
		textSize(100);
		stroke("black");
		fill("pink");
		textFont("Impact");
		textAlign(CENTER, CENTER);
		text("PAUSED", width / 2, height / 2);
		pop(); // Clear our drawing changes
	} else {
		// Draw the regular stuff
		if (frameCount % 51 === 0) {
			backgroundR = random(255);
			backgroundG = random(255);
			backgroundB = random(255);
		}
		background(backgroundR, backgroundG, backgroundB);

		for (let i = 0; i < butterflyPositions.length; i++) {
	      		let pos = butterflyPositions[i];
	      		drawButterfly(pos.x, pos.y);
    		}
	}
}

function mousePressed() {
	butterflyPositions.push(createVector(mouseX, mouseY));
}

function drawButterfly(x, y) {
	push();
	translate(x, y);
	
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
	
	pop();  
	
}

function keyPressed() {
	console.log("Key pressed:  " + key);
	if (key === 'p' || key === 'P') {
		console.log("hey that was the P key!");
		isPaused = !isPaused; 
	} 
}
