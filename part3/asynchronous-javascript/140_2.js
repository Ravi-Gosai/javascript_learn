const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest()

 

xhr.open("GET", URL);

xhr.onload = function(){
    console.log(xhr.readyState)

    const response = xhr.response;

        const data = JSON.parse(response) // JSON file ne Javascript object ma convert kare  

        console.log(data)
}
// mtlb onload tyare j work kare jyare ready state 4 hoy

xhr.send()
