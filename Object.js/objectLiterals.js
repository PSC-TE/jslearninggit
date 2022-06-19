let person={

    fname : "Pankaj",
    lname : "chauhan",
    skills  : ["java", "selenium", "javascript"],
    biodata : {
        fname: "pankaj",
        lname:"chauhan"
    },
    introduction : function () {
        console.log("hello all myself "+ this.fname+" "+this.lname);
    }
}

// accessing properties
    // 1.dot notation
    console.log(person.skills)
    console.log(person.biodata);

    // 2.bracket notations
    console.log(person["skills"]);
    person.introduction()


