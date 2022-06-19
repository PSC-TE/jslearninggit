/*
let a = 0;
let b= 1;
let sum=0;
console.log(a);
console.log(b);

while (sum<100) {
    
    sum=a+b;
    a=b;
    b=sum;
    console.log(sum)
}
*/
function fib(num) {
    if(num==0){
        return 0}
    else if(num==1){
        return 1
    }
    return fib(num-1)+fib(num-2)
    }


// console.log(fib(5));

// var num=5
// var res=""
// for (i=0;i<5;i++){
//     //console.log(fib(i));
//     res=res+" "+fib(i) 
// } 
// console.log(res);

//console.log(fab(num-1));