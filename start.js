console.log("OMG FROM START ");


const madoWitchy = document.getElementById("witchSprite");
var witchctx = madoWitchy.getContext("2d");
const CANVAS_WIDTH = madoWitchy.width = 384;
const CANVAS_HEIGHT = madoWitchy.height = 384;
const spriteHeight = 384;
const spriteWidth = 384;
let spriteFrame = 0;
let fps = 0;
const frameSpeed = 40;

const madoSprite = document.getElementById("witch");

function animation() {
	if ((fps % frameSpeed) == 0) {
		witchctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
		let frameX = spriteWidth * (spriteFrame % 4);
		
		witchctx.drawImage(madoSprite, frameX, spriteHeight * 0, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		spriteFrame++;
	}
	fps++;
	requestAnimationFrame(animation);
}
animation()