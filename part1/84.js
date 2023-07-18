function CreateUser(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function (){
    return this.age >= 18; 
}
CreateUser.prototype.sing = function (){
    return "la la la la ";
}


const user1 = new CreateUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
const user2 = new CreateUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = new CreateUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");

for(let key in user1){
    // console.log(key);
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }

}

// extra 

console.log("alag pade atale ")


function createUser_3(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
createUser_3.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
createUser_3.prototype.is18 = function (){
    return this.age >= 18; 
}
createUser_3.prototype.sing = function (){
    return "la la la la ";
}


const user_11 = new createUser_3('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
const user_22 = new createUser_3('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user_33 = new createUser_3('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");


for(let key in user_11){
    console.log(key);
} // badhi key print thai prototype ma rahel key pn print thase 

console.log("console ma alag pade atale ")


for(let key in user_11){
    if(user_11.hasOwnProperty(key)){
        console.log(key);
    }
}  // prototype ma rahel key print thase ny
