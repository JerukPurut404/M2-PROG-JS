class App
{
    runApplication()
    {
        let arr = ["Biffy Clyro", "Blink 182", "Third Eye Blind", "Taylor Swift", "Flogging Molly", "Jodi Bernal"];
        let Headers = document.getElementsByClassName("Docent");
        console.log(Headers);
        Headers[0].innerHTML = arr[0];
        Headers[1].innerHTML = arr[1];
        Headers[2].innerHTML = arr[2];
        Headers[3].innerHTML = arr[3];
        Headers[4].innerHTML = arr[4];  
        console.log(arr, Headers)
        for (let i = 0; i < Headers.length; i++) {
            Headers[i].innerHTML = arr[i];
            
        }
    }    
}    
let app = new App();
app.runApplication();