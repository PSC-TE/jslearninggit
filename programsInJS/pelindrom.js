let str= "madam";
let reverse="";
for(let i=str.length-1;i>=0;i--){
    reverse=reverse+str[i];
}
console.log(reverse);
if(str==reverse){
    console.log("the given word is pelindrome");
}
else("not pelindrome")

let x=12599521;
let temp=x;
let sum=0;

while(x>0){
    let r=x%10;
    sum=parseInt (sum*10+r);
    x=parseInt(x/10);
}
console.log(sum);
if (temp==sum) {
    console.log("it is pelindrome");
} else {
    console.log("it is not pelindrome");
}