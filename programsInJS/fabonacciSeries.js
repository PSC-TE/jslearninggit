let a= 0;
let b= 1;
let sum=0;
while (sum<100) {
    sum=a+b;
    a=b;
    b=sum;
    console.log(sum);

}