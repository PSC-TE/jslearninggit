// let sent= 'javascripts'

// using set
// let set= new Set(sent)
// console.log(set);
// console.log(...set);



// for (const set_ele of set) {
//     let count=0
//     for (const sent_ele of sent) {
//         if (set_ele==sent_ele) {
//             count++
//         } 
//     }
//     console.log(set_ele+' : '+ count);
    
// }

// using array.reduce method
// let sent_arr= sent.split('')
// // console.log(sent_arr.reverse());
// console.log(sent_arr);

// console.log(sent_arr.reduce((newObj,ele)=>{
//     if(newObj[ele]){
//         newObj[ele]++
//     }
//     else{
//         newObj[ele]=1
//     }
//     return newObj
// },{}));

// let job= 'hello i am a manager in bangalore in a company'
// let jobArr= job.split(' ');
// let setjob= new Set(arr)
// for (const ele of setjob) {
//     let count=0
//     for (const arrEle of arr) {
//         if(ele==arrEle){
//             count++
//         }
//     }
//     console.log(ele + ' :  '+count);
    
// }    

// let str='aabbcc'
// let set=new Set(str)
// // console.log(set);
// let temp=''
// for (let i = 0; i < set.length; i++) {
//     temp=temp+set[i]
    
// }
// console.log(temp);
	// var arr = ["apple", "mango", "apple",
	// 		"orange", "mango", "mango"];

// console.log(arr.indexOf('apple')); 
// console.log(arr.indexOf('mango')); 

//    arr.forEach((element, index)=>{
//             console.log( element, index);
//         });
	// function removeDuplicates(arr) {
	// 	return arr.filter((item,index) => arr.indexOf(item) === index);
	// }

	// console.log(removeDuplicates(arr));

// let arr=[1,2,20,33,12,433,4,5]
// let arr2=[...arr,...arr]
// console.log(arr2);
// let newArr= arr.concat(arr)
// console.log(newArr);

// let newarr=arr.sort((a,b)=>{
//     return a-b
// })
// console.log(newarr);

// const fruits=["banana","apple","chicku","lemon"].shift()
// console.log(fruits);
	
// for (let i=0;i<5;i++){
//     setTimeout(() => {
//         console.log(i)
//     }, i*1000);
// }


// function dothis(){
//     var x
//     console.log(x);
//     x=23;
//     console.log(x)
// } 

//     dothis()


// let arr=[1,2,3,4,5,6]
// // for (let i = arr.length-1; i >=0 ; i--) {
// //     arr.pop()   
// // }
// // arr=[]
// console.log(arr);
// // arr.length=0
// arr.splice(0,arr.length)
// console.log(arr);

let str='aaabbcc'
let arr=str.split('')
let temp=''
for (let ele of arr) {
        if(!temp.includes(ele)){
            temp=temp+ele
        }
    
}
console.log(temp);
// let arr=str.split('')
// let set=new Set(arr)
// console.log(...set);

// let newfun=arr.filter((ele,index)=> arr.indexOf(ele)===index)
// console.log(newfun.join(''));

// console.log(arr.reduce((acc,ele)=>{
//     let count=0
    
//     if((acc[ele])){
//          acc[ele]++
//     }
//     else acc[ele]=1
//     return acc
// },{}));