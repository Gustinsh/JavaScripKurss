
// if (new Date().getHours() <18 {
// document.getElementById("demo").innerHTML = "Good Day!";

// }
function compare() {
    var a = document.getElementById("aval").value;
    var b = document.getElementById("bval").value;
    var conclusion = "";

    if (a > b) {
        conclusion = " a (" + a + ") is biger than b(" + b + ")";
    }
    else if (a < b) {
        conclusion = "a (" + a + ") is smaller than b(" + b + ")";
    }
    else {
        conclusion = "a (" + a + ") is equal to b(" + b + ")";

    }
    document.getElementById("demo").innerHTML = conclusion;
}
