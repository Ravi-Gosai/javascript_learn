const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest()



console.log(xhr.readyState) 

xhr.open("GET", URL);



xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        console.log(xhr.response);
        // console.log(typeof xhr.response); // string mtlb json ma male response 

        const response = xhr.response;

        const data = JSON.parse(response) // JSON file ne Javascript object ma convert kare  

        console.log(data)
        console.log(typeof data) // object 

    // aatlu long na karvu hoy to file 140_2.js pramane onload no use karvo 


    }
}
xhr.send()

