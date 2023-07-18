// new keyword 
// 1.) this = {}
// 2.) return {} 
//

// __proto__ 
// // official ecmascript document
// [[prototype]]

// constructor function 
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
console.log(user1);
console.log(user1.is18());



// extra 


// pra 1 

function createUser_1(firstName, age){
    user_1 = Object.create(createUser_1.prototype);
    user_1.firstName = firstName;
    user_1.age = age;
    return user_1;
}
createUser_1.prototype.music = function(){
    return `hovee hovee `;
}


const user_3 = createUser_1("ravi", 34);
console.log(user_3)
console.log(user_3.age)
console.log(user_3.music())


//  prac 2


function createUser_2(firstName, age){
    this.firstName = firstName;
    this.age = age;
}
createUser_2.prototype.song = function(){
    return `tu jane naaa `;
}


const user_4 = new createUser_2("ravi", 23);

console.log(user_4) // upar aavyu same output aavse but aahiya aapde new keyword no use karel chhe new keyword niche pramane kam kare sathe sathe createUser_1 sathe compare karta raho

console.log(user_4.song())

// 1st => this namno kalpnik empty object create kare 
// 2nd => this object ne return kare 
// 3rd =>  user_1 = Object.create(createUser_1.prototype); aa rite jem aaapde prototype add kariye am new keyword use krta te automatic te function na prototype ma cheak kari lee chhe  Object.create(createUser_1.prototype); aavi koi line lakhvani jarur nathi

// upar prac 1 and prac 2 compare karo atale idea aavi jase 




// have file 82.js ne aa method thi kariye



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

// khas  upr new keyword add karel  athi aavu thai chhe
console.log(user_11);
console.log(user_11.is18());

console.log(user_22.about()); 

// new key word use kari key banaviye pachhi tema for in looop lagaviye to badhi key print thai prototype ma rheli key pn print thai
// aagal ni file ma aana pr chhe