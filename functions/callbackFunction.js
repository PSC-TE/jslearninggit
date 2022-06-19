
// callback function=>A callback function is a function that is passed to 
// another function as an argument and is executed after some operation has been completed. 
// an example of a simple callback function that logs to the console after some operations have been completed.

// function higherOrderFuntion(external) {
//     external()
//     console.log("i am from higher order function.")
    
// }

// function callback() {
//     console.log("i am from callback function.")
// }

// higherOrderFuntion(callback)


/*
function order(status){
    if (status == "payment success"){
        console.log("your order has been placed.")
    }
    else
        console.log( "your payment failed.")
}

function payment(){
    return "payment success"
}

order(payment())

function fun1(external) 
{
    external()
 console.log("this is fun1 function.")  
}

fun1(function callback() {
    console.log("i am from callback function.")
})*/

function modifyArray(arr, callback) {
    // do something to arr here
    arr.push(100);
    // then execute the callback function that was passed
    callback();
  }
  
  var arr = [1, 2, 3, 4, 5];
  
  modifyArray(arr, function() {
    console.log("array has been modified", arr);
  });