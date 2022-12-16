class App
{
    runApplication(x,y)
    {
        const canvas = document.getElementById("canvasId");
        const ctx = canvas.getContext("2d");
        function drawCircle(x, y) {
            ctx.beginPath();
            ctx.arc(x, y, 20, 0, 2 * Math.PI);
            ctx.fillStyle = "red";
            ctx.fill();
        }
        for (let i = 0; i < 200; i++) {
            // generate random x and y values
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            // call drawCircle function with random x and y values
            drawCircle(x, y);
        }
    }
}
let app = new App();
app.runApplication();