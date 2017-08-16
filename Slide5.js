function setup() { 
  createCanvas(400, 400);
	drawScene1();
	//drawScene2();
} 

keyPressed = function() {
	if (currentScene === 1){
		drawScene2();
	}
};

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
	textSize(20);
	fill(250, 250, 250);
	text("press SPACE to", 130, 270);
	fill(250, 250, 250);
	text("continue", 163, 290);
}

var drawScene2 = function() {
	currentScene = 2;
	//textbox
	background(220);
	strokeWeight(3);
	fill(194, 255, 222);
	rect(50, 50, 300, 300);
	//text- 5d
	textSize(32);
	fill(0, 102, 153);
	text("Instructions", 115, 100);
	textSize(24);
	fill(0, 102, 153);
	text("The E meter shows how", 75, 150);
	fill(0, 102, 153);
	text("much you've eaten. Once", 65, 175);
	fill(0, 102, 153);
	text("it's filled, you cannot", 90, 200);
	fill(0, 102, 153);
	text("eat anymore.", 125, 225);
	continueButton();
}
