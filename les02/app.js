var canvas = document.getElementById('canvasId');
var g = canvas.getContext('2d');
g.fillRect(0,0,10,10);
g.canvas.width  = window.innerWidth;
g.canvas.height = window.innerHeight;
var gX = canvas.width / 2;
var gY = canvas.height / 2;
var black = "#735F32";
var white = "#FFF";
var frameColor = "#735F32";
var glassColor = "#FFF";


g.beginPath();
g.moveTo(300,100);
g.lineTo(700,200);
g.lineTo(600,400);
g.lineTo(200,300);
g.lineTo(300,100);
g.fillStyle = black;
g.fill();
g.closePath();

g.beginPath();
g.moveTo(200,300);
g.lineTo(200,500);
g.lineTo(600,600);
g.lineTo(600,400);
g.lineTo(200,300);
g.fillStyle = black;
g.fill();
g.closePath();

g.beginPath();
g.fillStyle = black;
g.moveTo(600, 400);
g.lineTo(600, 600);
g.lineTo(800, 500);
g.lineTo(800, 300);
g.lineTo(700, 200);
g.lineTo(600, 400);
g.closePath();
g.stroke();
g.fill();

g.beginPath();
g.rect(100, 100, 200, 200);
g.fillStyle = frameColor;
g.fill();
g.closePath();

g.beginPath();
g.rect(110, 110, 180, 180);
g.fillStyle = glassColor;
g.fill();
g.closePath();