class App
{
	runApplication()
	{
		let title = document.getElementById("newstitle");
		let randomgetal = Math.random();
		console.log(randomgetal)
		if (randomgetal < 0.2){
			title.style.backgroundColor = "#00FF00";
		}
		else if (randomgetal >= 0.2 && randomgetal < 0.6){
			title.style.backgroundColor = "	#f3c61c";
		}
		else (randomgetal > 0.6)
			title.style.backgroundColor = "#436eee";
	}
}
let app = new App();
app.runApplication();
console.log(app.runApplication());
