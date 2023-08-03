
// pra 1

// const bucket = ['coffee', 'chips' , 'vegetables','salt' , 'rice']

// const friedRicePromise = new Promise ((resolve, reject)=>{
//     if(bucket.includes("vegetables")&& bucket.includes("salt")&& bucket.includes("rice")){
//         resolve("fried rice (then na perameter ni value ma resolve ni andar nu run thai")
//     }else{
//         reject("couldn't do it ")
//     }
// })

// // how to consume promise

// const resolve = (RSvalue)=>{console.log("let eat ", RSvalue)}

// const reject = (RJvalue)=>{console.log(RJvalue)}

// friedRicePromise.then(resolve, reject)  ;




// pra 2





const bucket = ['coffee', 'chips' , 'vegetables','salt' , 'rice']

const friedRicePromise = new Promise ((resolve, reject)=>{
    if(bucket.includes("vegetables")&& bucket.includes("salt")&& bucket.includes("rice")){
        resolve("fried rice (then na perameter ni value ma resolve ni andar nu run thai")
    }else{
        reject("couldn't do it ")
    }
})

// how to consume promise

const resolve = (RSvalue)=>{console.log("let eat ", RSvalue)}

const reject = (RJvalue)=>{console.log(RJvalue)}


friedRicePromise.then(resolve).catch(reject)  

// catch atale joo resolve vadu fail thai to catch vadu run thai
