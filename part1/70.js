// optional chaining 

const user  = {
    firstName: "harshit",
    // address: {houseNumber: '1234'}
}



console.log(user?.firstName);
console.log(user?.address?.houseNumber);


// extra 

const user1 = {
    firstName: "ravu",
    // address: {houseNumber:'12345'} 
}

console.log(user1.firstName)

// upar address vadi line cmnt kari chhe mano ke a data atyare aapdi pase nathi but future ma aavse to su karvu 

console.log(user1.address) // output undefined
// address vado data ny hoy and aapde aane access karavani try karisu to undefined aavse it's ok but niche jovo

// console.log(user1.address.houseNumber) // output error 
// address vado data ny hoy and aapde aane access karavni try karisu to error aavse a problem chhe 


const user2 = {
    firstName: "raviGosai",
    // address: {houseNumber:'12345'} 
}

console.log(user2?.firstName) 


console.log(user2?.address?.houseNumber) // undefined aavse error ny aave

//  xxxx?.yyy?.zzz aam karathi su thai => jo xxxx undefined hoy to aj print kari dese aagal yyy pase jase ny jo jo xxxx ni value hase and yyy undefined hase tya zzz cheack kariya vagar undefind aavse 
// ? use na kariye to error aave 
// hal aapdi pase data na hoy and future ma aavano hoy tyare program ma hal koi error na aave atale aa use thai 