function setup() { 
  createCanvas(400, 400);
	drawScene1();
} 
var currentScene;

var drawScene1= function() { 
	currentScene = 1;
	//textbox
	background(220);
	strokeWeight(3);
	fill(194, 255, 222);
	rect(50, 50, 300, 300);
	//text- 5c
	textSize(32);
	fill(0, 102, 153);
	text("Instructions", 115, 100);
	textSize(24);
	fill(0, 102, 153);
	text("Keep clicking E to", 100, 150);
	fill(0, 102, 153);
	text("finish eating your meal", 75, 175);
	fill(0, 102, 153);
	text("before time runs out.", 90, 200);
	continueButton();
}

var continueButton=function(){
	rect(115, 250, 175, 50);
	textSize(25);
	fill(250, 250, 250);
	text("Continue", 153, 285);
}
