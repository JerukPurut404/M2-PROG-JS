export class HuisRenderer{
    tekenHuis(x,y,g)
    {
       
       
        let black = "#735F32";
        

        
        g.beginPath();
        console.log('done')
        g.moveTo(x,y);
        g.lineTo(x+150, y+50);
        g.lineTo(x+350,y+100);
        g.lineTo(x+300,y+200);
        g.lineTo(x+100,y+150);
        g.lineTo(x+150,y+50);
        g.fillStyle = black;
        g.fill();
        g.closePath();

        g.beginPath();
        g.moveTo(x+100,y+150);
        g.lineTo(x+100,y+250);
        g.lineTo(x+300,y+300);
        g.lineTo(x+300,y+200);
        g.lineTo(x+100,y+150);
        g.fillStyle = black;
        g.fill();
        g.closePath();

        g.beginPath();
        g.fillStyle = black;
        g.moveTo(x+300, y+200);
        g.lineTo(x+300, y+300);
        g.lineTo(x+400, y+250);
        g.lineTo(x+400, y+150);
        g.lineTo(x+350, y+100);
        g.lineTo(x+300, y+200);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath(); 
        g.moveTo(x+300, y+250);
        g.lineTo(x+325, y+235);
        g.lineTo(x+325, y+287.5)
        g.lineTo(x+325, y+235)
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.moveTo(x+137.5,y+225);
        g.lineTo(x+225, y+245);
        g.lineTo(x+245, y+200);
        g.lineTo(x+145, y+182.5);
        g.closePath();
        g.stroke();
        g.fill();
        
    }
}