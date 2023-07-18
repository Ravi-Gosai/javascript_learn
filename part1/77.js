
// function (that function create object)
// 2.) add key value pair 
// 3.) object ko return krega 
// function createUser(firstName, lastName, email, age, address){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     };
//     user.is18 =  function(){
//         return this.age >= 18;
//     }
//     return user;
// }

// const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 19, "my address");
// console.log(user1);
// const is18 = user1.is18();
// const about = user1.about();
// console.log(about);



// extra




const user_1 = {
    firstName: "ravi",
    lastName: "gosai",
    email: "rbgosai@gmail.com",
    age: 2,
    address: "visavadar , kalsari road",
    about: function(){
        return `${this.firstName} is ${this.age} years old`;
    },
    is18: function(){
        return this.age >= 18;
    }
    
}

const aboutUser_1 = user_1.about();

console.log(aboutUser_1)


// upar jeva hajaro object banava mate function

function createUser_1(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about =  function(){
        return `${this.firstName} is ${this.age} years old`;
    };
    user.is18 =  function(){
        return this.age >= 18;
    };
    return user;

}

const user_2 = createUser_1('ravi', 'gosai', 'rbgos@gmal', '3', 'visavadar')
console.log(user_2)

const age18 = user_2.is18();
console.log(age18)

const about1 = user_2.about();
console.log(about1)

// have upar na function ma aapde jetla new user add kariye atali var function pn retype thai aathi aaapde function anadr declare karvo saru ny bahar banaviye function je kam aapde file 78.js ma karel chhe 