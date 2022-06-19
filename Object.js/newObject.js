let car= new Object();

car.make= "Toyota"
car.model= "corolla"
car.transmission= "auto"
car.move= function () {
    console.log("car started moving");
}
car.spec= {
    make : "Toyota",
    model : "corolla",
    transmission : "auto",
    move : function () {
    console.log("car started moving");
}
}

console.log(car.spec);
console.log(car.transmission);