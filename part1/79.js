const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age >= 18;
    },
    sing: function(){
        return 'toon na na na la la ';
    }
}
function createUser(firstName, lastName, email, age, address){
    const user = Object.create(userMethods);// {}
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 9, "my address");
const user2 = createUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = createUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
console.log(user1);
console.log(user1.about());
// console.log(user3.sing());




// extra


const userMethods_1 = {
    about:  function(){
        return `${this.firstName} is ${this.age} years old`;
    },
    is18:  function(){
        return this.age >= 18;
    },
    sing: function(){                     //note_1= *
        return ` dhudki dhudai lage`;
    },
    music: function(){
        return `aata maji satakali`;
    }

}

function createUser_1(firstName, lastName, email, age, address){
    const user = Object.create(userMethods_1);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    // user.about = userMethods_1.about;
    // user.is18 = userMethods_1.is18;  
    // user.sing = userMethods_1.sing;
    // aa upar ni  3 line kadhi nakhvi  aapde proto ma userMehod_1 object add karel chhe 
    
    return user;
}

const user_2 = createUser_1('ravi', 'gosai', 'rbgos@gmal', '3', 'visavadar')
const user_3 = createUser_1('ravina', 'gosai', 'rbgos@gmal', '3', 'visavadar')
console.log(user_2)

console.log(user_2.about())

console.log(user_3.sing()) 

console.log(user_2.music())

// note_1  => ahiya aapde sing add karel chhe tem haju method add karva hoy to sathe sathe createUser_1 ma pn sing add karvu pade have hajaro ma aam function add karva mate su karvu joiye => aapde proto no use karsu 

