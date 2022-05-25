function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
//alert(counter());
//alert(counter());
//alert(counter());
//alert(counter());

// 4 Times Alert.

let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged? = 1
  }
  console.log(count); // What is logged? = 0
})();

for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged? 0 1 2 
    }, 1000);
  }

  //Write a code to calculate area of a rectangle using inner function. 
  //In this case outer function should accept parameter length and inner 
  //function should accept parameter breadth.

  function areaRectangle(l){
      return function innerRectangle(b){
          return l*b;
      }
  }

    rect1 = areaRectangle(6);
    console.log(rect1(10));

//Take a variable in outer function and create an inner function
//to increase the counter every time it is called.

function outerCounter(){
    var counter = 0;
    return function innerCounter(){
        counter++;
        return counter;
    }
    innerCounter;
}

let c = outerCounter();
console.log(c());
console.log(c());
console.log(c());

//Print Output
var a = 12;
(function () {
  alert(a);
})();
// popup or alert of message "12".



var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();
// popup or alert of message "12". 
//var can be redeclared and reasigned, always take latest value.

var globalVar = "xyz";
(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +  //outerArg = 123
        "innerArg = " + innerArg + "\n" +  //innerArg = 456
        "outerVar = " + outerVar + "\n" +  //outerVar = a
        "innerVar = " + innerVar + "\n" +  //innerVar = b
        "globalVar = " + globalVar);       //globalVar = xyz
    
    })(456);
})(123);
