let person1={
    fname: "pankaj",
    lname:"chauhan",
    intro1: function(){
        console.log("hello my name is "+ this.fname+ " "+ this.lname);
    }
}

let person2={
    fname: "anil",
    lname:"bro",
    intro2: function(){
        console.log("hello my name is "+ this.fname+ " "+ this.lname);
    }
}

greet=function (greetMsg) {
    console.log(greetMsg+ this.fname +" "+ this.lname);
}

person1.intro1();

// call() => it is used to call function of any other object from the different function. Inside call first parameter is object name.
person1.intro1.call(person2);
greet.call(person1,"welcome to all ");