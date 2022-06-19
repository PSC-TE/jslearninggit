
let cityArr=[
    {name:"A", age: 25, country: "india"},
    {name:"B", age: 30, country: "japan"},
    {name:"C", age: 15, country: "usa"},
    {name:"D", age: 18, country: "uk"},
    {name:"E", age: 35, country: "germany"},
    {name:"F", age: 20, country: "france"},

]

// console.log(cityArr.filter((element, index)=>{
//     return element.age>20;
// }));

let cart=[
    {mobileName: "samsung", mobPrice: "45000"},
    {mobileName: "samsung", mobPrice: "55000"},
    {mobileName: "samsung", mobPrice: "35000"},
    {mobileName: "iphone11", mobPrice: "100000"},
    {mobileName: "iphone11", mobPrice: "150000"},
    {mobileName: "iphone11", mobPrice: "125000"},
    {mobileName: "redmiNote11", mobPrice: "40000"},
    {mobileName: "redmiNote11", mobPrice: "70000"},
    {mobileName: "redmiNote11", mobPrice: "80000"}

]

// console.log(cart.filter((element, index)=>{
//     return element.mobileName=="samsung"
// }));

// samArr=(cart.filter((element, index)=>{
//     return element.mobileName=="samsung"
// })).length;

// console.log(samArr)

// console.log(cart.reduce((count,element)=>{
//     if (!(count[element.mobileName])) {
//        count[element.mobileName] =1
//        }
//     else {
//        count[element.mobileName]++
//    }
//    return count;
// },{}));
   
let str= "pankaj";
let arr=[];
for(i=0;i<str.length;i++){
arr.push(str.charAt(i))}
console.log(arr);

console.log((arr.reduce((count, word)=>{
    if(!(count[word])){
        count[word]=1
    }
    else{
        count[word]++
    }
    return count;
},{})))
   
// let num=[1,3,4,5,3,4,2]

// console.log((num.filter((element,count)=>{
//     if(!(count[element])){
//         count[element]=1
       
//     }
   
// },{})))
