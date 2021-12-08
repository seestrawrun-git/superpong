var ping;
var song;
let r = 0;
let g = 0;
let b = 0;

function preload() {
	ping = loadSound("ping2.mp3");
	song = loadSound("pongMusic.mp3");
}




let player, ball, ai;

let playerScore = 0;
let AIScore = 0;

let dots = [];
let dSize = 1;
let size = 10;

let go = false;

function setup() {
	createCanvas(800, 500);
	//setting up the division line in the center of the canvas
	for(let i = dSize/2; i<height; i+=dSize*2) {
		dots.push(createVector(width/2 - dSize/2, i));
	}

	player = new Player;
	ball = new Ball;
	ai = new AI;
	song.play();
	

	

}

function draw() {
	background(r, g, b);
	

	noStroke();
	fill(255, 100);
	drawSquares();

	

	ball.update();
	ball.show();
	ball.edges();

	console.log(ball.edges());


	if(ball.collision == true) {
		ping.play();
		
	}


	if(playerScore == 5) {
		alert("You win!")
		// text("You win!", width/2, height/2);
		playerScore = 0;
		AIScore = 0;
		r = 0;
		g = 255;
		b = 0;
	}

	if(AIScore == 5) {
		alert("You lose!");
	
		playerScore = 0;
		AIScore = 0;
		r = 255;
		g = 0;
		b = 0;
	}

	if(playerScore == 0 && AIScore == 0) {
		textSize(78);
		text("Super Pong", width/2, height/2);
	}

	if(playerScore == 0|| AIScore == 0){
		
		r = 0;
		g = 0;
		b = 0;
	}

	if(playerScore == 1 || AIScore == 1) {
		r = 86;
		g = 29;
		b = 94;
	}

	if(playerScore == 2 || AIScore == 2) {
		r = 254;
		g = 203;
		b = 0;
	}

	if(playerScore == 3 || AIScore == 3) {
		r = 73;
		g = 153;
		b = 160;
	}

	if(playerScore == 4 || AIScore == 4) {
		r = 255;
		g = 136;
		b = 73;
	}

	player.update();
	player.show();
	
	ai.update();
	ai.show();

	ball.scores();





	drawScores();



}

function drawScores() {
	let x1 = width/4;
	let x2 = width*3/4;
	let y = size * 1.5;

	noStroke();
	fill(255);
	textAlign(CENTER);
	textSize(size);
	text(playerScore, x1, y);
	text(AIScore, x2, y);
}


//a function to draw the squares down the center of the screen
function drawSquares() {
	for(let i = 0; i < dots.length; i++) {
		let x = dots[i].x;
		let y = dots[i].y;

		rect(x,y, dSize, dSize);
	}
}

//function for movement
function keyPressed() {
	go = true;
	if(keyCode == 'W' || keyCode==UP_ARROW) {
		player.up();
	} else if (key == 'S' || keyCode ==DOWN_ARROW) {
		player.down();
	}
}

function keyReleased() {
	if((key== 'W' || keyCode==UP_ARROW) || (key == 'S' || keyCode ==DOWN_ARROW)) {
		player.stp();
	}
}
