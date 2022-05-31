console.log("Running...");

//Write one example explaining how you can write a callback function ?

function Hi() {
     console.log("HI");
}

let callback = (a,callbackfns) => {
    callbackfns();
}

callback(10,Hi);

//Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Explain callback hell. - callback hell is not like other functions . it will not give the output at a time . it will take time to give output. callback hells will form arrow shapped.
// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7

let calBackF = () => {
    setTimeout(() => {
        console.log("1");
        setTimeout(() => {
            console.log("2");
            setTimeout(() => {
                console.log("3");
                setTimeout(() => {
                    console.log("4");
                    setTimeout(() => {
                        console.log("5");
                        setTimeout(() => {
                            console.log("6");
                            setTimeout(() => {
                                console.log("7");
                            }, 7000);
                        }, 6000);
                    }, 5000);
                }, 4000);
            }, 3000);
        }, 2000);
    }, 1000);
    
}

// calBackF();

//Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7

// let promise = new Promise((resolve , reject) => {
//     resolve();
// })

// promise.then(() => {
//     //   for( let i=1;i<=7;i++){
//           setTimeout(() => {
//               console.log("1");
//           }, 1000);
//     //   }
//     })
// promise.then(() => {
//     setTimeout(() => {
//         console.log("2");
//     }, 2000);
// })
// promise.then(() => {
// setTimeout(() => {
//     console.log("3");
// }, 3000);
// })
// promise.then(() => {
// setTimeout(() => {
//     console.log("4");
// }, 4000);
// })
// promise.then(() => {
// setTimeout(() => {
//     console.log("5");
// }, 5000);
// })
// promise.then(() => {
// setTimeout(() => {
//     console.log("6");
// },6000);
// })
// promise.then(() => {
// setTimeout(() => {
//     console.log("7");
// }, 7000);
// })

//Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected 

let fpromise = new Promise((resolve,reject) => {
       let arg = "YES";
       
       if(arg === "YES"){
           resolve();
       }
       else{
           reject();
       }

})

fpromise
.then(()=>{
    console.log("Promise Resolved");
})
.catch(()=>{
    console.log("print Promise Rejected");
})

//Create examples to explain callback hell function

const getEmployeeID = () => {

        setTimeout(() => {
            console.log("Fetching the Employee details");
            let id = [1,2,3,4,5];
            console.log(id);
    
            setTimeout(() => {
                let employeeDetails = {
                    name: "Arjun Kanungo",
                    age: 34,
                }
                console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age}`);
    
                setTimeout(() => {
                    employeeDetails.gender = "Male",
                    console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age} and the gender is ${employeeDetails.gender}`);
    
                    setTimeout(() => {
                        employeeDetails.salary = 21000;
                        console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age} and the gender is ${employeeDetails.gender} and the salary is ${employeeDetails.salary}`);
                    },2000);
                }, 2000);
            }, 2000);
        },2000);
    }
    getEmployeeID();

//Create examples to explain promises function

const getEmployeeId = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let id = [1,2,3,4,5];
        resolve(id);
        reject("then data isn't found");
    }, 2000);
})

getEmployeeId
         .then((id)=>{
            console.log(id);
})


//Create examples to explain async await function

const fn1 = () =>{
    return "I am function one";
 }
 
 const fn3 = () =>{
     return "I am function three";
  }
 
  const fn2 = () =>{
      return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("I am function two");
      }, 3000);
     })
  }
 
  const callFns = async () => {
      let res1= fn1();
      console.log(res1);
 
      let res2=  await fn2();
      console.log(res2);
 
      let res3= fn3();
      console.log(res3);
  }
 
  callFns(); 

//Create examples to explain promise.all function

const promise1 = Promise.resolve("S");
const promise2 = 2003;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise");
  }, 1000);
});

Promise.all([promise1,promise2,promise3]).then(values => {
  console.log(values); 
})