// const URL = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();
// // console.log(xhr);
// // step1
// // console.log(xhr.readyState);
// xhr.open("GET",URL);
// // console.log(xhr.readyState);
// // xhr.onreadystatechange = function(){
// //     // console.log(xhr.readyState);
// //     if(xhr.readyState === 4){
// //         console.log(xhr)
// //         const response = xhr.response;
// //         const data = JSON.parse(response);
// //         console.log(typeof data);
// //     }
// // }

// xhr.onload = function(){
//     const response = xhr.response;
//     const data = JSON.parse(response);
//     console.log(data);
// }

// xhr.send();



// extra


// prac 1


const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest()

// console.log(xhr) //  XMLHttpRequest() ni property janava mate 

console.log(xhr.readyState)  // open pahela ready state 0 hoy 

xhr.open("GET", URL);// .open("method", URl)

console.log(xhr.readyState) // open thya bad ready state 1 hoy 

xhr.onreadystatechange = function(){
    console.log(xhr.readyState) // 4 var ready state chnage thai 
}
xhr.send()
// upar nu output 2 thi 4 sudhi value print thase 

// ready state mate mdn xhr ready state viche cheack karo to khbr pade kai value mate status chhe

// ready state 
// 0 =>	UNSENT	Client has been created. open() not called yet.
// 1 =>	OPENED	open() has been called.
// 2 =>	HEADERS_RECEIVED	send() has been called, and headers and status are available.
// 3 =>	LOADING	Downloading; responseText holds partial data.
// 4 =>	DONE	The operation is complete.

// readystate 4 thai tyare responce male 
