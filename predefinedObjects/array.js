let arr1= new Array(1,2,3,4)
// console.log(arr1)

let arr2=[10,20,30,40]
// console.log(arr2)

let arr3=[10, "good", true,  , [50,60,70], {a:1,b:2}]

/*
for (let index = 0; index < arr3.length; index++) {
    console.log(index +":"+ arr3[index])
    
}

console.log("----------------------------do while-------------------------")

do {
    console.log(index+" : "+arr3[index]);
    index++;
} while (index<arr3.length);

console.log("-----------------------while--------------------------")
let index=0;
while (index<arr3.length) {
    console.log(index+" : "+arr3[index]);
    index++;
}

console.log("-----------------------for in--------------------------")

for (const index in arr3) {
    console.log(index+" : "+arr3[index]);        
    }
*/
    console.log("-----------------------for of--------------------------")

for (const element of arr3) {
    console.log(element)
}    
