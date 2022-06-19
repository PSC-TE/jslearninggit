// function factorial(num) {
//     let fact=1
//     for (let i = num; i >= 1; i--) {
//         fact= fact*i
        
//     }
//     console.log(fact);
// }
// factorial(5)

function factorial(num){
    if(num==1||num==0){
        return 1;
    }
    else {
        return num*factorial(num-1)
    }
}
console.log(factorial(5)); 