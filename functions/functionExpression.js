product = function (a,b){
    return (a*b);
}
let res= product(5,6)
console.log(res);                           //when you store function in an expression it act like identifier

welcome= function (p1,p2,p3,p4) {
    console.log("Welcome "+p1+p2+p3+p4);
    console.log(arguments);                 //returns all arguments in object format
    console.log(arguments[2]);              //returns particular index arguments 
    
}
welcome("pankaj ","singh ", "chauhan ", "te ")