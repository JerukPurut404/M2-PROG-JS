import {HuisRenderer} from "./HuisRenderer.js"
import {BoomRenderer} from "./BoomRenderer.js"

class App
{
    run(){
        let canvas = document.getElementById('canvasId');
        let g = canvas.getContext('2d');
        g.canvas.width  = window.innerWidth;
        g.canvas.height = window.innerHeight;
        huisRenderer.tekenHuis(100,100,g);
        huisRenderer.tekenHuis(430,200,g);
        huisRenderer.tekenHuis(680,400,g);

        boomRenderer.tekenKerstBoom(420,340,g);
        boomRenderer.tekenKerstBoom(503,340,g);
        boomRenderer.tekenKerstBoom(124,340,g);
        boomRenderer.tekenKerstBoom(257,340,g);
    }
    Mario()
    {
        console.log("MARIO!!")
    }
    Bwah()
    {
        return("Bwah");
    }
    getallen()
    {
        let result = 2 + 2;
        console.log(result);
    }
}
let app = new App();
let huisRenderer = new HuisRenderer();
let boomRenderer = new BoomRenderer();
app.run();
/*app.house();*/
app.Mario();
console.log(app.Bwah());
app.getallen();
