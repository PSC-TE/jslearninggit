let arr1= [10,20,30,199,57,64,121]
// console.log(arr1);

/* concat()==>Combines two or more arrays. This method returns a new array without modifying any existing arrays.
console.log( arr1.concat(1,2,3,4,"a","b","c","d")); 
console.log(arr1);


// push()==>Appends new elements to the end of an array, and returns the new length of the array.
console.log(arr1.push((50,60))); 
console.log(arr1);

// pop()==>Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(arr1.pop())
console.log(arr1);

// shift()==>Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(arr1.shift()); 
console.log(arr1);
console.log("++++++++++++");

// unshift()==>Inserts new elements at the start of an array, and returns the new length of the array.
console.log(arr1.unshift(800,757)); 
console.log(arr1);

// splice()==>Removes elements from an array and, if necessary, inserts new elements in their place, returning the array of deleted elements.
console.log(arr1.splice(2,2,[5,6,8]));
console.log(arr1);

// every()==>Determines whether all the members of an array satisfy the specified test.
console.log(arr1.every((element)=>{
    return element>20;
}))

// some()==>Determines whether the specified callback function returns true for any element of an array.
console.log(arr1.some((element)=>{
    return element>50;
}))

// forEach()==>Performs the specified action for each element in an array. implemented by map
arr1.forEach((element, index)=>{
    console.log(index +" : "+ element*2);
    console.log( element*2) ;
})

// map()==> Calls a defined callback function on each element of an array, and returns an array that contains the results. implemented by filter
arr1.map((element, index)=>{
    console.log(element/2);
})


// filter()==> Returns the elements of an array that meet the condition specified in a callback function.
console.log(arr1.filter((element,index)=>{
    return element>100;
}))

// sort()==> Sorts an array in place. This method mutates the array and returns a reference to the same array.
console.log(arr1.sort((a,b)=>{
    return a-b;                                                                 //ascending order
}))

console.log(arr1.sort((a,b)=>{
    return b-a;                                                                 //descending order
}))*/

// join()==>Adds all the elements of an array into a string, separated by the specified separator string.
console.log(arr1.join(" : "));

let Amazon = [
    {productName : "RedmiNote10Pro", poductPrice : 15000},
    {productName : "GalaxyA53", poductPrice : 35000},
    {productName : "RealmeNeo3", poductPrice : 30000},
    {productName : "Iphone12ProMax", poductPrice : 121000}
]

// reduce()==>Calls the specified callback function for all the elements in an array. 
// The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
console.log(Amazon.reduce((obj_ref, element)=>{
    let count = 0;
    if (element.poductPrice > 30000) { 
         obj_ref[element.productName]  = element.poductPrice                     
    }
    return obj_ref
}, []));

// let arr3 = [5,6,7]
// // console.log(arr2);
// console.log(arr3);

// sum of all elements in an array
// console.log(arr1.reduce((sum,b)=>{
//     sum = sum + b
//     return sum
// },0));

//even array
console.log(arr1.reduce((evenArray, element)=>{
    if (element%2 == 0) {
        evenArray.push(element)
    }
    return evenArray
}, []));

console.log(Amazon.reduce((countArray, element)=>{
    if (!(countArray[element.productName])) {
        countArray[element.productName] = 1
    }
    else{
        countArray[element.productName]++
    }
    return countArray
}, {}));
    
