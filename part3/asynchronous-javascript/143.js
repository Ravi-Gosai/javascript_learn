// // fetch 

// const URL = "https://jsonplaceholder.typicode.com/postssss";

// fetch(URL,{
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
//     })
//     .then(response =>{
//         if(response.ok){
//             return response.json()
//         }else{
//             throw new Error("Something went wrong!!!")
//         }
//     })
//     .then(data =>{
//         console.log(data);
//     })
//     .catch(error =>{
//         console.log("inside catch");
//         console.log(error);
//     })



// extra

const URL = "https://jsonplaceholder.typicode.com/posts";


// const whatIsthis = fetch(URL);
// console.log(whatIsthis) // Promise return kare chhe aathi .then lagadi sakay 

fetch(URL)
    .then(response=>{
        console.log(response); // response ni andar json nam ni property chhe

        // console.log(response.json()) // aa ek promise return kare but aanu output jeva mate pela nichi line return vadi comment karvi baki error aavse // output Promise {<pending>}
       
        return response.json(); // have aa agal then use kari jovo aa su return kare

    })
    .then(data=>{
        console.log(data); // aahiya mai resonse aavse as a object 
    })