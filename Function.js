function first(){
    console.log("Running");
}
first();

function add(num1,num2){
    let x;
     x = num1 + num2;
     console.log(x);

}
add(3,4);

const addnum = (a,b) => {
    let c = a+b;
    return c;
}
console.log(addnum(5,6));

//"Print output: 
/*var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};*/
//girl ();
//21

//"Print output: 
/*var x = 21;
girl ();             // undefined
console.log(x)      // 21
function girl() {
    console.log(x);
    var x = 20;
};*/

//"Print output

var x = 21;
//a();
//b();
//console.log(a);   // undefined
a = function() {
    
   x = 20;
  console.log(x);   //undefined
};
b = function() {
    
    x = 40;
   console.log(x);  // undefined
};

//Write a function that accepts parameter n and returns factorial of n

function factorial(n){
    //let fact;
    for(let i = 1; i<=n; i++)
       n = n*i;
    return n; 
}

console.log(factorial(3));