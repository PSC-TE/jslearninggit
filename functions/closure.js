// A closure is a function defined inside another function (called parent function) and has access to the 
// variable which is declared and defined in parent function scope.

// The closure has access to variable in three scopes:

// Variable declared in his own scope
// Variable declared in parent function scope
// Variable declared in global namespace

var globalVar = "abc";

// Parent self invoking function
(function outerFunction (outerArg) { // begin of scope outerFunction
  // Variable declared in outerFunction function scope
  var outerFuncVar = 'x';    
  // Closure self-invoking function
  (function innerFunction (innerArg) { // begin of scope innerFunction
    // variable declared in innerFunction function scope
    var innerFuncVar = "y";
    console.log(         
      "outerArg = " + outerArg + "\n" +
      "outerFuncVar = " + outerFuncVar + "\n" +
      "innerArg = " + innerArg + "\n" +
      "innerFuncVar = " + innerFuncVar + "\n" +
      "globalVar = " + globalVar);
  // end of scope innerFunction
  })(5); // Pass 5 as parameter
// end of scope outerFunction
})(7); // Pass 7 as parameter

// var x = 3;
// var y = "-5";
// console.log(y-x);   //coecing to integer both values

// console.log(typeof(NaN))
// console.log(isNaN("Hello"))  // Returns true
// console.log(isNaN(345))   // Returns false
// console.log(isNaN('1'))  // Returns false, since '1' is converted to Number type which results in 0 ( a number) 
// console.log(isNaN(true)) // Returns false, since true converted to Number type results in 1 ( a number)
// console.log(isNaN(false)) // Returns false
// console.log(isNaN(undefined)) // Returns true

var y = 234;
var z = y;
console.log(y);
console.log(z);
y=45;
console.log(y);
console.log(z);