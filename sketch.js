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
	//main circle
	ellipse(0, 0, 200, 200);
	
	//main dot
	posX = cos(time)*100;
	// posY = sin(time)*100;
	posY = ((4*sin(time))/PI)*100;
	fill(256);
	// ellipse(posX, posY, 5, 5);
	line(0, 0, posX, posY);


	//Second dot
	noFill();
	ellipse(posX, posY, 80, 80);
	translate(posX, posY);
	posX1 = cos((time*3))*40;
	posY1 = sin((time*3))*40;
	// posY1 = ((4*sin(time*3))/(3*PI))*40;
	fill(256);
	line(0, 0, posX1, posY1);

	//Third dot
	noFill();
	ellipse(posX1, posY1, 60, 60);
	translate(posX1, posY1);
	posX2 = cos((time*5))*30;
	posY2 = sin((time*5))*30;
	// posY2 = ((4*sin(time*5))/(5*PI))*30;
	fill(256);
	line(0, 0, posX2, posY2);

	
	//Fourth dot
	noFill();
	ellipse(posX2, posY2, 40, 40);
	translate(posX2, posY2);
	posX3 = cos((time*7))*20;
	posY3 = sin((time*7))*20;
	// posY3 = ((4*sin(time*7))/(7*PI))*20;
	fill(256);
	line(0, 0, posX3, posY3);



	translate(-posX-posX1-posX2, -posY-posY1-posY2);
	fill(256);
	translate(200, 0);
	points.unshift(posY3+posY2+posY1+posY);
	
	
	line(posX3+posX2+posX1+posX-200, posY3+posY2+posY1+posY, 0, posY3+posY2+posY1+posY);
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
	console.log("time: " + time);
}


