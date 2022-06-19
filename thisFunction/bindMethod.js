let car1= {
    brand: "honda",
    colour: "red",
    intro: function () {
        console.log(this.brand + " is having "+ this.colour +" colour.")
    }
}

let car2= {
    brand: "M.j. hector",
    colour: "black",
    property: function () {
        console.log(this.brand + " is having "+ this.colour +" colour.")
    }
}

greet = function (greetMsg) {
    console.log(greetMsg+this.brand+" of "+this.colour)
}

// bind()=> it is also used to call a function of an object inside any other function by giving reference of that object.
// here it returns a function type of object.
refvalue=greet.bind(car2, "Welcome to our showroom. which car you would like to have? ")
refvalue();

refValue2=car2.property.bind(car1)
refValue2();


// used for data hiding
let sum = function (a,b){
    console.log( a+b);
}

ref=sum.bind(this, 10)
ref(15)