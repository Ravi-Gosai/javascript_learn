// Promise.resolve
// Promise chaining

// const myPromise = Promise.resolve(5);
// Promise.resolve(5).then(value=>{
//   console.log(value);
// })


// then()
// then method hamesha promise return karta hai


// function myPromise(){
//   return new Promise((resolve, reject)=>{
//     resolve("foo");
//   })
// }

// myPromise()
//   .then((value)=>{
//     console.log(value);
//     value += "bar";
//     return value
//   })
//   .then((value) =>{
//     console.log(value);
//     value += "baaz";
//     return value;
//   })
//   .then(value=>{
//     console.log(value);
//   })




// extra 

// Promise.resolve

const myPromise = Promise.resolve(5);

myPromise.then((value)=>{
  console.log(value)
})
// mtlb je value aapde resolve ma store kariye te then ma rahel first perameter batabr hoy chhe 

// niche pramane direct varibale store karira vagar pn kari sakay

Promise.resolve({name: 'ravi'}).then((value)=>{
  console.log(value)
})


// then() method hamesa promise return kare
// Promise chaining

function myPromise_2(){
  return new Promise((resolve,reject)=>{
    resolve("foo");
  })
}

myPromise_2().then((value)=>{
  console.log(value);
  value += "bar";
  return value; // aahiya promise return thai chhe [Promise.resolve(value)] ni jem
}).then((value)=>{
  console.log(value);
  value += "baaaz";
  return value;
}).then((value)=>{
  console.log(value)
})
// promise ma j then() method use kari sakay chhe
