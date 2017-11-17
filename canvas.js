var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var mouse = {
	x: undefined,
	y: undefined
}
var maxRadius = 80;
var minRadius = 20;

//blues and purple
// var colorArray = [
// 	'#FF29C5',
// 	'#D026E8',
// 	'#B036FF',
// 	'#6726E8',
// 	'#6726E8',
// ];

//Black and white
// var colorArray = [
// 	'#000000',
// 	'#FFFFFF',
// ];

//darkblues
var colorArray = [
	'#060321',
	'#4500FF',
	'#2D00B4',
	'#1C007F',
	'#10004F',
];

window.addEventListener('mousemove', 
	function(event) {
	mouse.x = event.x;
	mouse.y = event.y;
});

window.addEventListener('mousedown', 
	function(event) {
	mouse.down = true;
	console.log(mouse.down);
});

window.addEventListener('mouseup', 
	function(event) {
	mouse.down = false;
	console.log(mouse.down);
});

window.addEventListener('resize', function(){
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	init();
});

function Circle(x, y, dx, dy, radius) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.color = colorArray[Math.floor(Math.random()*colorArray.length)];
	this.minRadius = radius;
	// this.r = Math.floor(Math.random()*128);
	// this.g = Math.floor(Math.random()*0);
	// this.b = Math.floor(Math.random()*128)+128;
	// this.a = (Math.random()+2)/3;
	// this.rgba = 'rgba('+this.r+','+this.g+','+this.b+','+this.a+')';
	// var r = Math.floor(Math.random() * 256)
 // 	var g = Math.floor(Math.random() * 256)
 // 	var b = Math.floor(Math.random() * 256)
	// var a = Math.random();

	// c.fillStyle = 'rgba('+r+','+g+','+b+','+a+')';

	this.draw = function() {

		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
		c.lineWidth=0;
		c.strokeStyle = 'blue';
		c.fillStyle = this.color;
		c.fill();
		c.shadowBlur=50;
		c.shadowColor = "white";
		c.globalAlpha = 0.9;
	}

	this.update = function() {
		if (this.x+5 > innerWidth-this.radius) {
			this.dx = -(Math.abs(.5*this.dx+2));
		}
		if (this.x-5 < this.radius) {
			this.dx = -(-Math.abs(.5*this.dx+2));
		}		
		this.x += this.dx;
		if (this.y+5 > innerHeight-this.radius) {
			this.dy = -(Math.abs(.5*this.dy+2));
		}
		if (this.y-5 < this.radius) {
			this.dy = -(-Math.abs(.5*this.dy+2));
		}
		this.y += this.dy;
		this.draw();

		//interactivity

		if(mouse.x - this.x < 50 && mouse.x -this.x > -50 
			&& mouse.y - this.y < 50 && mouse.y - this.y > -50) {

			if(this.radius < maxRadius){
			this.radius += 1;
			}
		}
		else if (this.radius > this.minRadius){
			this.radius -= 1;
		}

		if(mouse.x - this.x < 50 && mouse.x - this.x > 0 &&
			mouse.y - this.y < 50 && mouse.y - this.y > 0 && !mouse.down){
			this.dx = this.dx+.05;
			this.dy = this.dy+.05;
		}

		if(mouse.x - this.x > -50 && mouse.x - this.x < 0 &&
			mouse.y - this.y < 50 && mouse.y - this.y > 0 && !mouse.down ){
			this.dx = this.dx-.05;
			this.dy = this.dy+.05;
		}

		if(mouse.x - this.x < 50 && mouse.x - this.x > 0 &&
			mouse.y - this.y > -50 && mouse.y - this.y < 0 && !mouse.down){
			this.dx = this.dx+.05;
			this.dy = this.dy-.05;
		}

		if(mouse.x - this.x > -50 && mouse.x - this.x < 0 &&
			mouse.y - this.y > -50 && mouse.y - this.y < 0 && !mouse.down){
			this.dx = this.dx-.05;
			this.dy = this.dy-.05;
		}

		if(mouse.x - this.x < 1000 && mouse.x - this.x > 0 &&
			mouse.y - this.y < 1000 && mouse.y - this.y > 0 && mouse.down){
			this.dx = .95*this.dx+Math.random()*3;
			this.dy = .95*this.dy+Math.random()*3;
		}

		if(mouse.x - this.x > -1000 && mouse.x - this.x < 0 &&
			mouse.y - this.y < 1000 && mouse.y - this.y > 0 && mouse.down ){
			this.dx = .95*this.dx-Math.random()*3;
			this.dy = .95*this.dy+Math.random()*3;
		}

		if(mouse.x - this.x < 1000 && mouse.x - this.x > 0 &&
			mouse.y - this.y > -1000 && mouse.y - this.y < 0 && mouse.down){
			this.dx = .95*this.dx+Math.random()*3;
			this.dy = .95*this.dy-Math.random()*3;
		}

		if(mouse.x - this.x > -1000 && mouse.x - this.x < 0 &&
			mouse.y - this.y > -1000 && mouse.y - this.y < 0 && mouse.down){
			this.dx = .95*this.dx-Math.random()*3;
			this.dy = .95*this.dy-Math.random()*3;
		}		

		// if(mouse.down) {
		// 	if(mouse.x - this.x > 0){
		// 		this.dx += .2;
		// 	}
		// 	if(mouse.x - this.x < 0){
		// 		this.dx -= .2;
		// 	}			
		// 	if(mouse.y - this.y > 0){
		// 		this.dy += .2;
		// 	}
		// 	if(mouse.y - this.y < 0){
		// 		this.dy -= .2;
		// 	}						
		// }

		// if(mouse.down) {
 	// 		this.angle = Math.atan2(this.y, this.x);
		// 	this.x=this.x+this.dx*Math.cos(this.angle);
		// 	this.y=this.y+this.dy*Math.sin(this.angle);
		// }

		// else{
		// 	this.dx = this.dx;
		// 	this.dy = this.dy;
		// }	
		
	}
}

var circleArray = [];

function init() {

	circleArray = [];
	for (var i = 0; i < 150; i++) {
		var radius = Math.random()*10+10;
		var x = Math.random()*(innerWidth - radius*2)+radius;
		var y = Math.random()*(innerHeight - radius*2)+radius;
		var dx = 2*(Math.random() - 0.5);
		var dy = 2*(Math.random() - 0.5);

		circleArray.push(new Circle(x, y, dx, dy, radius));
	}

}

function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);

	for (var i = 0; i < circleArray.length; i++){
		circleArray[i].update();
	}

}

init();
animate();