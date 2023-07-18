// every method
// const numbers = [2,4,6,9,10];


// const ans = numbers.every((number)=>number%2===0);

// console.log(ans);

// const userCart = [
//     {productId: 1, productName: "mobile", price: 12000},
//     {productId: 2, productName: "laptop", price: 22000},
//     {productId: 3, productName: "tv", price: 35000},
// ]


// const ans = userCart.every((cartItem)=>cartItem.price < 30000);
// console.log(ans);


// extra


const numbers = [2,4,6,8,10];

const ans = numbers.every((number)=>number % 2 === 0);

console.log(ans)
// every mathod true  and false return kare badha number ma condition true to true return karse baki ek item ma pn condition false to false return karse 


const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "TV", price: 14000},
]

// how to check every product price < 30000

const priceIn = userCart.every((cartItem)=>cartItem.price < 30000);

console.log(priceIn)