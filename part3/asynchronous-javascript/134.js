// // Promise
// console.log("script start");
// const bucket = ['coffee', 'chips','vegetables','salt','rice'];



// const friedRicePromise = new Promise((resolve,reject)=>{
//     if(bucket.includes("vegetables")&& bucket.includes("salt") && bucket.includes("rice")){
//         resolve({value:"friedrice"});
//     }else{
//         reject("could not do it");
//     }
// })

// // produce 



// // consume 
// // how to consume 

// friedRicePromise.then(
//     // jab promise resolve hoga 
//     (myfriedRice)=>{
//     console.log("lets eat ", myfriedRice);
//     }
//     ).catch(
//     (error)=>{
//         console.log(error)
//     })


// setTimeout(()=>{
//     console.log("hello from settimeout")
// },0)

// for(let i = 0; i <=100; i++){
//     console.log(Math.random(), i);
// }

// console.log("script end!!!!")



// extra 



// promise

// const bucket = ['coffee', 'chips' , 'vegetables','salt' , 'rice']

// new Promise ((resolve, reject)=>{
//     if(bucket.includes("vegetables")&& bucket.includes("salt")&& bucket.includes("rice")){
//         resolve("fried rice")
//     }else{
//         reject("couldn't do it ")
//     }
// })

// aa value ne variabale ma store kari sakay chhe niche pramane

// how to produce promise

console.log("script start")

const bucket = ['coffee', 'chips' , 'vegetables','salt' , 'rice']

const friedRicePromise = new Promise ((resolve, reject)=>{
    if(bucket.includes("vegetables")&& bucket.includes("salt")&& bucket.includes("rice")){
        resolve("fried rice (then na perameter ni value ma resolve ni andar nu run thai")
    }else{
        reject("couldn't do it ")
    }
})

// how to consume promise

//1st method 

friedRicePromise.then((myfriedrice)=>{
    console.log("let eat" , myfriedrice);
}, (error)=>{console.log(error)})
 // error ek perameter chhe teni jagya pr aapde game te value aapi sakay and then ma tahel 1st function resolve mate and 2nd function reject mate
// aapde upar then ma 2 callback function pass kariyo chhe 

// upar nu simple samjava mate 134_1.js file pr cheak karo


setTimeout(()=>{
    console.log(" this is setTimeout")
}) // settimeout sajmva mate console ma order khbr pade kya order ma code run thai

// 2nd method
friedRicePromise.then((myfriedrice)=>{
    console.log("let eat" , myfriedrice);
}).catch((error)=>{ console.log(error)})

// promise ek browser feature chhe aathi setinterval ni jem aakhi script run thya bad j aa promise run thase 

// 1st and 2nd bey same kam kare chhe



for (let i = 0; i <=100; i++){
    console.log(Math.random(), i);
}

console.log("script end")

// imp :- promise script-end pachhi run thase console ma check karo

// promise microtask queue ma add thai
// setTimeout callback queue ma add thai

// aathi callback queue pahela microtask queue vada task pahela thai aathi setTimeout pahela promise run thase 


