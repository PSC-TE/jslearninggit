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

greet = function (greetMsg,ask) {
    console.log(greetMsg+ask+this.brand+" of "+this.colour)
}
// apply()=> it is same like call method but here we give parameters in array form.
greet.apply(car1, ["welcome to our showroom " ,"which model you would like? "]);