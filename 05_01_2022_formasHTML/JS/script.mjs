//path test- accessibility
//expires date and time or after period
// expire brawser on/off

console.log("Pirms:"+ document.cookie);

//var cookieText0 = "name=admin; path=/; Expires=Mon 10-January-2022 20:35:36 GMT;";
var cookieText0 = "name=admin; path=/; Max-age=300";
//console.log("pēc(1):" + document.cookie);
document.cookie = cookieText0;



var cookieText1 = "username1=admin1; Max-age=300";
//console.log("pēc(2):" + document.cookie);
document.cookie = cookieText1;

var cookieText2 = "username2=admin2; Max-age=300";
//console.log("pēc(3):" + document.cookie);
document.cookie = cookieText2;