
function getkoks(){
 
switch (document.getElementById("koks").value) {
    case "Priede":
      koks = "Priede";
      break;
    case "Osis":
      koks = "Osis";
      break;
    case "Ābele":
       koks = "Ābele";
      break;
    case "Bērzs":
      koks = "Bērzs";
      break;
}s
document.getElementById("demo").innerHTML = "Tu izvēlējies " + koks;}