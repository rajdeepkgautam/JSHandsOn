function changeText() {
    document.getElementById("changeText").innerText = "MERN Stack";
}

//let element = document.getElementsByTagName("h1");
//console.log(element);
//let element1 = element.innerText;
//console.log(element1);

function displayTime(){
    let d = new Date();
    let HH = d.getHours();
    let MM = d.getMinutes();
    let SS = d.getSeconds();

document.getElementById("HH").innerText = HH;
document.getElementById("MM").innerText = MM;
document.getElementById("SS").innerText = SS;

setTimeout(displayTime,1000)
    
}

displayTime();

function replaceText(){
    document.getElementById("replaceText").innerText = "Welcome To Elevation Academey";
}

$("#hideText").click(function(){
    $("#hide").hide();
})