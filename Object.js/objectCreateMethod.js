let car= {
    model : "Amaze",
    year : "2019",
    colour : "red",
    wheels : function () {
        console.log("comes with alloy wheels");    
    }
}
console.log(car);

// create()==>Creates an object that has the specified prototype or that has null prototype.
let car2 = Object.create(car)
car2.price = "10lakhs"
car2.email = "car2.carbazaar.com"

console.log(car2);


for (let key in car2) {

    // console.log(car2[key]);          // here all the properties of car2 alongwith prototype props will be printed
    if (car2.hasOwnProperty.call(car2, key)) {
        console.log(car2[key]);         //here only car2 own properties will be printed
    }
}