let x=50;
// console.log(parseInt(x/2));
let flag = 0;
for (let i = 2; i <= x/2 ; i++) {
    if (x%i == 0) {
        flag = flag + 1
        break;
    }
   
}
if (flag == 0) {
    console.log('is  prime');

} else {
    console.log('is not prime');
}

