console.log("Running")


//Create 2 objects - parent and child. 
//Attach methods to parent and use those methods in child object using parents prototype

let parent = {
    Name : "RAJDEEP KUMAR GAUTAM",
    RollNo : 1803240112,
    College : "ABES ENGINEERING COLLEGE",
    Branch : "M.E.",
    /*displayInfo : function() {
            console.log(`The Name of The Student is ${this.Name} and the Roll Number is ${this.RollNo} of ${this.College} and his branch is ${this.Branch}`)
    }*/
 }

 child = {
    Name : "RKG",
       
    }

function displayInfo() {
        console.log(`The Name of The Student is ${this.Name} and the Roll Number is ${this.RollNo} of ${this.College} and his branch is ${this.Branch}`)
}

child.__proto__ = parent;
displayInfo.call(parent);
console.log(parent.displayInfo);
console.log(child);
console.log(child.Branch);
displayInfo.call(child);


//Write code to explain prototype chaining
const studentPrototype = {
        calcAge(){
            console.log(2022 - this.birthyear);
        },
        initialise(fname,lname,birthYear){
            this.fname = fname;
            this.lname = lname;
            this.birthYear = birthYear;
        }
    }
    
    const ramesh = Object.create(studentPrototype);
    console.log(ramesh);
    ramesh.fname = "Ramesh";
    ramesh.lname = "Thakur";
    ramesh.birthyear = 1990;
    
    ramesh.calcAge();
    console.log(ramesh);

    console.log(ramesh.__proto__);
    console.log(ramesh.__proto__.__proto__);
    console.log(ramesh.__proto__.__proto__.__proto__);
    
    /*const emma = Object.create(studentPrototype);
    emma.initialise("Emma","Watson", 1986);
    emma.calcAge();
    console.log(emma);*/

    //Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays
    array=[1,2,3,4,5,6]
    /*const ArrayProtoype = {
            calcArray(){
                  return  this.reduce((add,curr)=>add+=curr,0)
                
            },
            initialise(array){
                    this.array = array;
            }
    }

    const array1 = Object.create(ArrayProtoype);
    array1.array = [1,2,3,4,5,6];

    console.log(array1);

    array1.calcArray();*/

Array.prototype.sum = function() {
    return this.reduce((add,cur)=>add+=cur,0)
}
let sum1 = array.sum()
console.log(sum1);

//Write a JavaScript function to retrieve all the names of object's own and inherited properties.

function ABC(){
        console.log(Object.keys(child));
        console.log(Object.getPrototypeOf(child));
}
ABC();
