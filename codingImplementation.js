console.log("Running...");


//Given an array of 0's and 1's find out number of 0's
//Given an array find out total no. of odd and even nos.
//Given a string find out number of vowels

let array = [0,1,0,1,0,1,0,1,0,1];

var count=0;
for(i=0; i<array.length; i++){
    if(array[i]==0){
        count = count+1;
    }
}
console.log(count);

let arr = [2,3,4,5,6,7,8,9];
let evenOrOdd = arr.filter(x => x%2==0).reduce((acc,cur)=> acc+cur ,0);
console.log(evenOrOdd);

let str = "Prepbytes";
let vewles = ["a","e","i","o","u"];
let s=0;
    for (let sr of str) {
        if (vewles.includes(sr)) {
            s++;
        }
}
console.log(s);