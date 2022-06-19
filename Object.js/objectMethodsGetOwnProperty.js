function Food(size,grain,seed) {
    this.size= size;
    this.grain= grain;
    this.seed= seed;
    
}
var spaghetti= new Food("normal","wheet", "seedoil");
// Object.getOwnPropertyNames()==>Returns the names of the own properties of an object. The own properties of an object 
// are those that are defined directly on that object, and are not inherited from the object's prototype. 
// The properties of an object include both fields (objects) and functions.

// var names= Object.getOwnPropertyNames(spaghetti)

// console.log(names);
// names.forEach(element => {
//     console.log(element);
// });
var check= Object.getOwnPropertyNames(spaghetti).filter(checkKey);
console.log(check);

function checkKey(value){
    var firstChar= value.substr(0,1);
    if(firstChar=='s')
        return true;

    else
        return false;

}
