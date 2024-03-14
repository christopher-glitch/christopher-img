


function setup() {
	height = 600
	width = 600
	createCanvas(600, 600);
	background(0);

	colorMode(HSB, 250);
	d = PI / 4;
	A = 900;
	B = 600;
	a = 3;
	b = 4;
	u = 0.3;
	seed = 2000;
}

function draw() {
	noStroke();
	push();
	translate(width / 2, height / 2);
	var t = frameCount * u;
	var s = (frameCount + 1) * u;
	
	var preX = A * sin(a * s) * sin(b * s) * cos(b * t + d) * noise(seed);
	var preY = B * sin(b * s + d) * cos(a * s)* noise(seed);
	var x = A * sin(a * t) * sin(b * s) * cos(b * t + d) * noise(seed);
	var y = B * sin(b * t + d) * cos(a * s) * noise(seed);

	var c = color((frameCount / 2) % 250, 200, 250, 200);
	stroke(c);
	drawingContext.shadowBlur = 100
	drawingContext.shadowColor = color(255, 255, 0)
	line(preX, preY, x, y);

	pop()
}