// methods
// function inside object

function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
    firstName : "harsh",
    age: 8,
    about: personInfo
}
const person2 = {
    firstName : "mohit",
    age: 18,
    about: personInfo
}
const person3 = {
    firstName : "nitish",
    age: 17,
    about: personInfo
}

person1.about();
person2.about();
person3.about();





//extra


// function inside object

const person_1 = {
    firstName: "ravi",
    age: 23,
    about: function(){
        console.log(`person name is ${this.firstName} and age is ${this.age}`)
    }
    }
    // this a person_1 ni jem as a objct work kare 

person_1.about();





function person_1_Info(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`)
}


const person_2 = {
    firstName: "rajesh",
    age: 24,
    about: person_1_Info
    }


const person_3 = {
    firstName: "virat",
    age: 27,
    about: person_1_Info
    }


const person_4 = {
    firstName: "suresh",
    age: 25,
    about: person_1_Info
    }

    person_2.about();
    person_3.about();
    person_4.about();


