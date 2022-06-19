var a = 5555;
console.log(a);

// For let and const a new scope will be generated i.e. the script context
let b= "car";               
console.log(b);
const c= true;
console.log(c);

// in const you have to declare and initialize the element in the same line.
// const d;         //syntaxError: Missing initializer in const declaration
// d=53;

// here the variables will be in the local context 
function sum() {
    var a1 = 80;
    let x = 52;
    let y= 43
    console.log(a1);
   console.log( x+ y);   
}
sum()
// console.log(a1);         //can't access any var element from a function as it pop off from local variable scope.

// for let and const elements inside a block it will generate a new context in scope called block
{
    var s= "keyboard";
    let m= "aeroplane";
    const n= null;
}
console.log(s);
