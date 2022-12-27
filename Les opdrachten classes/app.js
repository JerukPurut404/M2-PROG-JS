class Dino
{
	constructor(name, vleeseter, leeftijd)
	{
		this.name = name;
		this.vleeseter = vleeseter;
		this.leeftijd = leeftijd;
		this.lives = true;
		this.hunger = true;
	}
	
	eetDino(dino) {
	  dino.lives = false;
	  console.log(`${this.name} has eaten ${dino.name}!`);
	}
	
	eetPlant(plant) {
	  console.log(`${this.name} has eaten a ${plant.name}!`);
	}
}

class Plant {
  constructor(name) {
    this.name = name;
  }
}

class App
{
	constructor() {
	  this.dinos = [];
	  this.plant = null;
	}
	
	runApplication()
	{
		const appNaam = "Blah";
		const versienummer = 0.9;
		const versiedatum = new Date(2022, 11, 24);
		const auther = "Eugene"; 
		const copyright = "Yes";
		const distributeur = "MediaCollege";
		let darkmode = 'true';
		let x = appNaam + " " + versienummer + " " + versiedatum + " " + auther + " " + copyright + " " + distributeur + " " + darkmode;
		
		this.plant = new Plant("Fern");
		this.dinos.push(new Dino("Stegosaurus", false, 5));
		this.dinos.push(new Dino("Trex", true, 10));
		
		this.dinos[0].eetPlant(this.plant);
		this.dinos[1].eetDino(this.dinos[0]);
	}
}

let app = new App();
app.runApplication();