


function setup() {
	height = 600
	width = 600
	createCanvas(600, 600);
	c1 = color(0);
	c2 = color(30, 0, 50);

	for (let y = 0; y < height; y++) {
		n = map(y, 0, height, 0, 1);
		let newc = lerpColor(c1, c2, n);
		stroke(newc);
		line(0, y, width, y);
	}

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
	drawingContext.shadowColor = color(190, 150, 180)
	line(preX, preY, x, y);

	pop()
}