function setup() {
	createCanvas(windowWidth, windowHeight);
}

let time = 0;
let points = [];
function setup() {
  createCanvas(1200, 800);
	stroke(256);

}

function draw() {
  background(0);
	translate(200, 200);
	noFill();
	ellipse(0, 0, 200, 200);
	
	
	posX = cos(time%360)*100;
	posY = sin(time%360)*100;
	fill(256);
	ellipse(posX, posY, 10, 10);
	
	translate(200, 0);
	points.unshift(posY);
	
	line(posX-200, posY, 0, posY);
	beginShape();
	noFill();
	for (let i = 0; i < points.length; i++) {
		vertex(i, points[i]);
	}
	endShape();
	
	if (points.length > 600) {
		points.pop();
	}
	
	
	time -= 0.015;
	if (time >= 3600) {
		time = 0;
	}
}


