const canvas = document.getElementById("village");
const ctx = canvas.getContext("2d");

canvas.width = 9999;
canvas.height = 600;


function setBackground() {
  ctx.fillStyle = "#33FF33";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "black";
  ctx.fillRect(0, canvas.height - 50, canvas.width, 50);
  ctx.font = "60px Lorem";
  ctx.strokeText("Happy Holidays", 10, 50);
}
setBackground();
function drawSnowMan(x, y) {
  ctx.beginPath();
  ctx.fillStyle = "bisque";
  ctx.arc(x, y, 30, 0, Math.PI * 2, true); 
  ctx.fill();

  ctx.beginPath();
  ctx.strokeStyle = "red"; 
  ctx.lineWidth = 3;
  ctx.arc(x, y, 20, 0, Math.PI, false); 
  ctx.stroke();


  ctx.beginPath();
  ctx.fillStyle = "green"; 
  ctx.arc(x, y, 3, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.arc(x, y, 5, 0, Math.PI * 2, true); 
  ctx.fill();
  
  ctx.beginPath();
  ctx.fillStyle = "bisque";
  ctx.arc(x, y+55, 35, 0, Math.PI * 2, true); 
  ctx.fill();
}
function drawHouse(x, y) {
  let black = "#735F32";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + 75, y + 25);
  ctx.lineTo(x + 175, y + 50);
  ctx.lineTo(x + 150, y + 100);
  ctx.lineTo(x + 50, y + 75);
  ctx.lineTo(x + 75, y + 25);
  ctx.fillStyle = black;
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(x + 50, y + 75);
  ctx.lineTo(x + 50, y + 125);
  ctx.lineTo(x + 150, y + 150);
  ctx.lineTo(x + 150, y + 100);
  ctx.lineTo(x + 50, y + 75);
  ctx.fillStyle = black;
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = black;
  ctx.moveTo(x + 150, y + 100);
  ctx.lineTo(x + 150, y + 150);
  ctx.lineTo(x + 200, y + 125);
  ctx.lineTo(x + 200, y + 75);
  ctx.lineTo(x + 175, y + 50);
  ctx.lineTo(x + 150, y + 100);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
}

function drawTree(x, y) {
  ctx.fillStyle = "brown";
  ctx.fillRect(x, y, 10, 50);

  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.moveTo(x - 25, y);
  ctx.lineTo(x + 25, y);
  ctx.lineTo(x, y - 37.5);
  ctx.fill();
}

function createElements() {
  let x = 10;
  let y = canvas.height - 500;


  for (let i = 0; i < 50; i++) {
    drawHouse(x, y);
    x += 200;
  }

  x = 50;
  y = canvas.height - 150;
  for (let i = 0; i < 50; i++) {
    drawTree(x, y);
    x += 250;
  }

  x = 50;
  y = canvas.height - 300;
  for (let i = 0; i < 100; i++) {
    drawSnowMan(x, y);
    x += 100;
  }

  ctx.fillStyle = "#000000";
  ctx.fillRect(0, canvas.height - 50, canvas.width, 50);
  ctx.fillStyle = "#FFFFFF";
  for (let i = 0; i < canvas.width; i += 50) {
    ctx.fillRect(i, canvas.height - 40, 25, 10);
  }
}

createElements();

