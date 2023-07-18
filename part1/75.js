// arrow functions 

const user1 = {
    firstName : "harshit",
    age: 8,
    about: () => {
        console.log(this.firstName, this.age);
    }   
}

user1.about(user1);

// arrow function ma this ni value srounding 1 step up hoy mtlb upar this ni value user1 ny but window object thase atale undefined aave che out put


