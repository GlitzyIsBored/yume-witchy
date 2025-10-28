let omg = "omg";
console.log(omg);

// dispaly image in canvas
var canvas = document.getElementById("spriteCanvas");
var ctx = canvas.getContext("2d");
var backround = document.getElementById("skyBackround");
ctx.drawImage(backround,0,0);	

//M ado

const madovas = document.getElementById("madotsukiSprite");
var ctx2 = canvas.getContext("2d");
const CANVAS_WIDTH = madovas.width = 62;
const CANVAS_HEIGHT = madovas.height = 62;
const spriteHeight = 62;
const spriteWidth = 62;
let spriteFrame = 0;
let fps = 0;
const frameSpeed = 18;

const madoSprite = document.getElementById("madosprite");

function animation() {
	if ((fps % frameSpeed) == 0) {
		//ctx.fillStyle = "red";
		ctx2.clearRect(0,250, CANVAS_WIDTH, CANVAS_HEIGHT);
		let frameX = spriteWidth * (spriteFrame % 4);
		
		ctx2.drawImage(madoSprite, frameX, spriteHeight * 0, spriteWidth, spriteHeight, 0, 250, CANVAS_WIDTH, CANVAS_HEIGHT);
		spriteFrame++;
	}
	fps++;
	requestAnimationFrame(animation);
}
animation()