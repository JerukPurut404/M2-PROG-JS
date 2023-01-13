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
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            drawCircle(x, y);
        }
    }
}
let app = new App();
app.runApplication();