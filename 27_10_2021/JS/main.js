draw();

// const myButton_me = document.querySelector("#me");
// const myButton_me_also = document.querySelector("#me_also");

const myButton = document.querySelectorAll("button");

const poga = document.querySelectorAll(`button`);
for (let i = 0; i < poga.length; i++) {
  poga[i].addEventListener(`click`, function () {
    alert(`Hello From ${i} index Of button :)`);
    console.log(poga[i]);
  });
}

//  myButton.onclick = function() {
//     alert("hello from selector");
//  }
// myButton_me.onclick = function() {
//     alert("hello from get element");
// }
// myButton_me_also.onclick = function() {
//     alert("hello from get element");
//  }