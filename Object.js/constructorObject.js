function Person(fname, lname, skillset, address,yoe) {
    this.fname= fname;
    this.lname= lname
    this.skillset= skillset
    this.address= address
    
}
let p1= new Person("pankaj","chauhan", "java,selenium, javascript", "india");
console.log(p1);

Person.prototype.yoe=3    //this prototype is used to add a new property to the constructor.
console.log(p1.yoe);