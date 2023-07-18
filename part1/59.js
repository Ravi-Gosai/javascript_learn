// reduce 
// const numbers = [1,2,3,4,5, 10];

// aim : sum of all the numbers in array 

// const sum = numbers.reduce((accumulator, currentValue)=>{
//     return accumulator + currentValue;
// }, 100);

// console.log(sum);
// accumulator , currentValue,  return 
// 1               2              3 
// 3               3              6
// 6               4              10
// 10              5              15
// 15              10             25


// const userCart = [
//     {productId: 1, productName: "mobile", price: 12000},
//     {productId: 2, productName: "laptop", price: 22000},
//     {productId: 3, productName: "tv", price: 15000},
// ]

// const totalAmount = userCart.reduce((totalPrice, currentProduct)=>{
//     return totalPrice + currentProduct.price;
// }, 0)

// console.log(totalAmount);

// total price      currentValue     return 
// 0                {}                  12000
// 12000            22000                34000
// 34000            15000                49000



// extra


const numbers = [1,2,4,5,6,7,9];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 100)
console.log(sum)

// sav upar jovo atale khbr padi jase kai rite sum kare
// upar aapde 100 lakhel chhe aathi sum a 100 vadhare aave
// 100 accumulator bani jai atale 100 + 1 thai 1 a current value bani jai
//100 ni value aapde na aapi hot to accumulator 1 hot ne current value 2 hot


const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "TV", price: 14000},
]

const totalAmount = userCart.reduce((totalPrice, currentProduct)=>{
    return totalPrice + currentProduct.price; 
}, 0)
//starting ma totalPrice 0 hase 

console.log(totalAmount)
