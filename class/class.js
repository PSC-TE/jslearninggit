class laptop{
    brand= "dell";
    static price= 40000;

    disp (){
        console.log("this laptop has hd display");
    }

    static memory(){
        console.log("this has a memory of 1tb");
    }
}

// for non static members we have to create an object
// for static members we can access giving class_name. method

let obj_ref = new laptop();
console.log(obj_ref.brand);     //it will access value since it is non static member
// console.log(obj_ref.price);     //undefined since static members can't be accessed by obj_ref
console.log(laptop.price);      //we can access static members by the help of class_name reference

obj_ref.disp()                  // //it will access value since it is non static function
laptop.memory()                 //we can access static members by the help of class_name reference
// obj_ref.memory()                //TypeError: obj_ref.memory is not a function since it is static function