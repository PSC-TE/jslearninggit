let num=987789;
let temp=num
let sum=0

while(temp>0){
    rem=temp%10;
    sum=10*sum+rem;
    temp=parseInt(temp/10)
}
console.log(sum);
if(num==sum){
    console.log("it is a pelindrome number");
}
else{
    console.log("it is not a pelindrome number")
}



let str= "abcxyzzyxcba"
let str2=''
for (let i = str.length-1; i >=0; i--) {
    str2=str2+str[i]  
}
console.log(str2);
if(str==str2){
    console.log("the given word is pelidrome");
}
else{
    console.log("the given word is not a pelindrome");
}

