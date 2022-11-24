class App
{
	runApplication()
	{
		const appNaam = "Blah";
		const versienummer = 0.9;
		const versiedatum = new Date(2022, 11, 24);
		const auther = "Eugene"; 
		const copyright = "Yes";
		const distributeur = "MediaCollege";
		let darkmode = true;
		let x = appNaam + " " + versienummer + " " + versiedatum + " " + auther + " " + copyright + " " + distributeur + " " + darkmode
		return x
	}
}
let app = new App();
app.runApplication();
console.log(app.runApplication());
