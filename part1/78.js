const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age >= 18;
    }
}
function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    return user;
}

const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 9, "my address");
const user2 = createUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = createUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
console.log(user1.about());
console.log(user3.about());






// extra



console.log("console ma alag padva mate")



const userMethods_1 = {
    about:  function(){
        return `${this.firstName} is ${this.age} years old`;
    },
    is18:  function(){
        return this.age >= 18;
    }
}

function createUser_1(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods_1.about;
    user.is18 = userMethods_1.is18;
    
    return user;
}

const user_2 = createUser_1('ravi', 'gosai', 'rbgos@gmal', '3', 'visavadar')
const user_3 = createUser_1('ravina', 'gosai', 'rbgos@gmal', '3', 'visavadar')
console.log(user_2)

console.log(user_2.about())


// haju aapde aa code ne aapde vadhare impprove karsu next file ma

