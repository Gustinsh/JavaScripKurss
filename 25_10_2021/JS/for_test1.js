const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
//for ( ; ;)
for (let i =0,  len = cars.length; i < len && i<2; i++) { //i mainīgais tikai darbojās ciklā &&=un
    console.log(i);
  text += cars[i] + "<br>"; // text= text + cars[i] + "<br>";
}


document.getElementById("demo").innerHTML = text;