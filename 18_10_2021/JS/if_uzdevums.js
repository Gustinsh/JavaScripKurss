function compare_three() {
    var a = document.getElementById("aval").value;
    var b = document.getElementById("bval").value;
    var c = document.getElementById("cval").value;
    var conclusion = "";
    var temp

    // if (a > b) {
    //     conclusion = " a (" + a + ") is biger than b(" + b + ")";
    // }
    // else if (a < b) {
    //     conclusion = "a (" + a + ") is smaller than b(" + b + ")";
    // }
    // else {
    //     conclusion = "a (" + a + ") is equal to b(" + b + ")";

    // }
    if (a > b ) {temp = a; a = b; b = temp;}
    if (b > c ) {temp = b; b = c; c = temp;}
    if (a > b ) {temp = a; a = b; b = temp;}



    document.getElementById("demo").innerHTML = a + " " + b + " " + c;
}