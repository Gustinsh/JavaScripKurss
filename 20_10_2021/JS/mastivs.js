const cars = ["Saab","Volvo","BMW","Audi"];
document.getElementById("demo").innerHTML = cars;

function beigas(){
    let x = document.getElementById("myText").value;
    cars.push (x);
    document.getElementById("demo2").innerHTML = cars;
}

function sakums(){
    var y = document.getElementById("myText").value;
    cars.splice (0,0,y);

document.getElementById("demo2").innerHTML = cars;
}





