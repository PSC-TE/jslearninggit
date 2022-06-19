// eg1
// function mul(x) {
//     return function (y){
//         return function(z){
//             return x*y*z 

//     }}}
// console.log(mul(2)(3)(4));

// eg2
function createBase(num) {
    return function(N){
        return num+N
    }   
}

let addTo=createBase(6);
console.log(addTo(10));

// eg3
// for(let i=0;i<50;i++){
//     if(i%3==0&&i%5==0){
//         console.log(i+"==fizz and buzz");
        
//     }
//     else if(i%3==0){
//         console.log(i +"==fizz")
        
//     }
//     else if(i%5==0){
//         console.log(i+"==buzz");
        
//     }
    
// }

// eg4
// var y=1
// if(function f(){}){
//     y +=typeof f;
// }
// console.log(y);     // 

// // eg5
// (function () {
//     var a=b=5;     
// })();
// console.log(b); 

// let arr=[1,2]
// arr[5]=9;
// console.log(arr);
// console.log(arr.length);