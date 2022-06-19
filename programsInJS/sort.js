let arr=[1,2,30,3,20]
let res=arr.sort()
console.log(res);
let arr2= ['a','c','t','b','w','z']
let res2=arr2.sort()
console.log(res2);
// console.log(arr2.sort((a,b)=>{
//     return (a-b)
// }));

let rev=[]
for (let i = arr.length-1; i >= 0; i--) {
    rev.push(arr[i])
    
}
console.log(rev);