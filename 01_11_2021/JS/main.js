//myGreeting(); var piekļūt šim tikai pēc apraksta. būs kļūda, nevar izmantotjo const aprakst zemāk
//myGreeting()

const myButton_me = document.querySelector("#me");
const myButton_me_also = document.querySelector("#me_also");
myButton_me.onclick = function() {
        alert("hello from get element me");
     }
     myButton_me_also.onclick = function() {
         alert("hello from get element me_also");
     }
// function myGreeting () {
//     alert('hello')
// }

// const myGreeting = function() {
//     alert('hello');
//   }

//myGreeting();   

// const myButton = document.querySelectorAll('button')

// myButton.forEach(onclick = function (element, index, array,) {
//     console.log (array)
//     alert('hello from selector (all buttons, - '+ index +' - element )')
// })
// myButton.forEach(element, index, array).onclick = function (element, index, array) {
//     alert("sveiki no selektora all buttons")
//     console.log(array);
//     console.log(index);
// }