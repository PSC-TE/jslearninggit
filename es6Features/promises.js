// console.log("start");
// setTimeout(() => {               //setTimeout()=> it will run the program after given timeperiod
//     console.log("running");
// }, 3000);
// console.log("end");

// console.log("start");
// setInterval(() => {                 //setInterval()=>it will run the program again and again after given interval
//     console.log("running");
// }, 2000);
// console.log("end");

// A callback used to initialize the promise. Represents the completion of an asynchronous operation
// This callback is passed two arguments: a resolve callback used to resolve the promise with a value or the result of another promise,
//  and a reject callback used to reject the promise with a provided reason or error.
// let prom= new Promise((resolve,reject)=>{
//     let x=50;
//     let y=100;
//     if (x==y) {
//         resolve("x is equal to y");
//     } 
//     else {
//         reject("x is not equal to y");
//     }
// })
// prom.then((msg)=>{console.log(msg);}).catch((msg)=>{console.log(msg);})

// function sync() {
//     console.log("start");
//     new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("in progress")
//         }, 2000);
//     }).then((msg)=>{console.log(msg)}).catch((msg)=>{console.log(msg);})
//     console.log("end");
// }
// sync()


// promise chaining

function start() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("start the car")
        }, 4000);
    })
    
}

function speed() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("release clutch and accelerate")
        }, 5000);
    })
    
}
function stop() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("apply the brakes")
        }, 2000);
    })
    
}
//  start().then((msg)=>{console.log(msg); return speed()}).then((msg)=>{console.log(msg); return stop()}).then((msg)=>{console.log(msg);})

// .all()=> Creates a Promise that is resolved with an array of results when all of the provided Promises resolve, or rejected when any Promise is rejected.
 Promise.all([start(),speed(),stop()]).then((msg)=>{console.log(msg);})