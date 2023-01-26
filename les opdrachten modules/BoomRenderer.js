export class BoomRenderer{
    tekenKerstBoom(x,y,g) {
        g.fillStyle = "brown";
        g.fillRect(x, y, 20, 100);
    
        g.fillStyle = "green";
        g.beginPath();
        g.moveTo(x - 50, y);
        g.lineTo(x + 50, y);
        g.lineTo(x, y - 75);
        g.fill();

        for (let i = 0; i < 10; i++) {
            let ballX = x - 15 + (i * 7);
            let ballY = y - 50 + (i * 5);
            g.fillStyle = "red";
            g.beginPath();
            g.arc(ballX, ballY, 3, 0, 2 * Math.PI);
            g.fill();
        }
    
        g.fillStyle = "gold";
        g.beginPath();
        g.moveTo(x, y - 80);
        g.lineTo(x - 10, y - 70);
        g.lineTo(x + 10, y - 70);
        g.fill();
      }
}

