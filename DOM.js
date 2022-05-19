console.log("Running");
var text = document.getElementById("text");
var text = document.getElementsByTagName("h1");
var text = document.getElementsByClassName("box");


//console.log(a);

function changeText() {
    let a = document.getElementById("1");
    a.innerText = "Hello World";
   // console.log(changeText[2].innerText);
}

function changeDirection() {

    const element1 = document.getElementsByClassName("parent");
    element1[0].style.flexDirection = "column";
}



function changeColor() {

    let b = document.getElementsByClassName("heading");
    console.log(b);
    b.id = "heading";
    console.log(b);
    b[0].style.color = "red";
}

function replaceText() {

    let a = document.getElementById("1");
    a.innerText = "Welcome To Elevation Academy";
    console.log(a.innerText);
}

var clock = document.getElementById('clock');

function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  clock.textContent = 
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
}

setInterval(time, 1000);

let option = document.getElementById("year").value;
console.log(option);