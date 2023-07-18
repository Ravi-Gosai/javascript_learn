// nested destructuring 
// const users = [
//     {userId: 1,firstName: 'harshit', gender: 'male'},
//     {userId: 2,firstName: 'mohit', gender: 'male'},
//     {userId: 3,firstName: 'nitish', gender: 'male'},
// ]

// const [{firstName: user1firstName, userId}, , {gender: user3gender}] = users;
// console.log(user1firstName);
// console.log(userId);
// console.log(user3gender);


//extra

const users = [
    {userId: 1, firstName: 'ravi', gender: 'male'},
    {userId: 2, firstName: 'amit', gender: 'male'},
    {userId: 3, firstName: 'prayag', gender: 'male'},
]

const [user1 ,user2, user3] = users;
console.log(user1)

const [{firstName, userId}, , {gender}] = users;
// upar object ni anadr aapde array chhe

console.log(userId)// 1st vada ni user id
console.log(firstName)
console.log(gender)

const [ , {firstName:newVar}, ] = users; //const newVar = "amit" aam value store karse aagal aapde aa study kari chhe na samajay to go back

console.log(newVar) // output amit
