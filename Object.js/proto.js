let person1 = {
    fname : "C R",
    lname : "Pradeep",
    fullName : function () {
        console.log(this.fname + " "+  this.lname);
    }
}

let person2 = {};

person2.__proto__ = person1             //to inherit properties of another object
person2.fname="pankaj"
console.log(person2);

for (const key in person2) {

    console.log(person2[key]);
    // if (person2.hasOwnProperty.call(person2, key)) {
    //     console.log(person2[key]); 
        
    // }
}