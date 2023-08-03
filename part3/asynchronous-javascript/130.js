// synchronous programming vs asynchronous programming
// synchronous programming
// synchronous programming single threaded
// console.log("script start");

// for (let i = 1; i < 10000; i++) {
//   console.log("inside for loop");
// }

// console.log("script end");

// setTimeout

console.log("script start");

// setTimeout(() => {
//   console.log("inside setTimeout");
// }, 1000); 

// function ne niche pramane lakhvathi aapde jyare setTimeout return kariye tyare ek id male


const id = setTimeout(() => {
  console.log("inside setTimeout");
}, 1000);

for (let i = 1; i < 100; i++) {
  console.log("....");
}
console.log("settimeout id is ", id);
console.log("clearing time out");

clearTimeout(id); 

// clearTimeout(id)aam karvathi have setTimeout ma rahel function run ny thai 

console.log("Script end");
