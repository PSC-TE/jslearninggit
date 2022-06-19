let str1="File"
let str2="Life"

let arr1=str1.toLowerCase().split('').sort().join('')
console.log(arr1);
let arr2= str2.toLowerCase().split('').sort().join('')
console.log(arr2)
if(arr1==arr2){
    console.log(str1+" is anagram to "+str2);
}
else console.log(str1 +"and"+str2 + "are not anagram")