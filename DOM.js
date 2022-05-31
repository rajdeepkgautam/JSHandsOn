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


function form(){
    var form = document.createElement("form")
    form.setAttribute("method","get")
    form.setAttribute("action","submit")
    var name = document.createElement("input");
    name.setAttribute("type","text");
    name.setAttribute("name","FullName");
    name.setAttribute("placeholder","Full Name");

    var email = document.createElement("input");
    email.setAttribute("type","email");
    email.setAttribute("name","email");
    email.setAttribute("placeholder","email@prepbyte.com");
    email.setAttribute("pattern","[a-zA-Z0-9]+@prepbyte.com");
    
    var phoneNo = document.createElement("input");
    phoneNo.setAttribute("type","tel");
    phoneNo.setAttribute("name","phoneNo");
    phoneNo.setAttribute("placeholder","91-9999999999");
    phoneNo.setAttribute("pattern","[91]{2}[0-9]{10}");

    var DOB = document.createElement("input");
    DOB.setAttribute("type","date");
    DOB.setAttribute("name","DOB");
    DOB.setAttribute("placeholder","DOB");
    DOB.setAttribute("min","1995-01-01");

    var submit = document.createElement("input")
    submit.setAttribute("type","submit")
    submit.setAttribute("value","submit")
    form.appendChild(name);
    form.appendChild(email);
    form.appendChild(phoneNo);
    form.appendChild(DOB);
    form.appendChild(submit);

    document.getElementsByClassName("form")[0]
    .appendChild(form);
   
}
form();