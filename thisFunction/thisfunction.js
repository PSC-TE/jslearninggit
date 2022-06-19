// this keyword in global scope represents window object
console.log(this);

// this keyword inside a function represents all the variables and objects inside the function
let person= {
    fname : "pankaj",
    lname : "chauhan",
    
    intro: function() {
        console.log(this);
    }
}
person.intro();