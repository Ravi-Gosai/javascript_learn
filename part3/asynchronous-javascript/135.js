// // function returning promise

// function ricePromise(){
//   const bucket = ['coffee', 'chips','vegetables','salts','rice'];
//   return new Promise((resolve,reject)=>{
//     if(bucket.includes("vegetables")&& bucket.includes("salt") && bucket.includes("rice")){
//         resolve({value:"friedrice"});
//     }else{
//         reject("could not do it");
//     }
//   })
// }


// ricePromise().then(
//   // jab promise resolve hoga 
//   (myfriedRice)=>{
//   console.log("lets eat ", myfriedRice);
//   }
//   ).catch(
//   (error)=>{
//       console.log(error)
//   })










// extra 

// function returning promise

function ricePromise(){ 
  const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice']

 return new Promise ((resolve, reject)=>{
  if(bucket.includes("vegetables")&& bucket.includes("salt")&& bucket.includes("rice")){
      resolve({value: "friedrice"})
  }else{
      reject("couldn't do it ")
  }
})
}

ricePromise().then((myfriedrice) => {
  console.log("let eat", myfriedrice);
}).catch((error) => { console.log(error) })

// upar aapde ricePromise() function ne call kari .then kariyu