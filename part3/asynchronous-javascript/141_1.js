

const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();

xhr.open("GET", URL);

xhr.onload = ()=>{
    if(xhr.status >= 200 && xhr.status < 300){
        const data = JSON.parse(xhr.response);
        console.log(data)

        const id  =data[3].id //output 4
        // console.log(id)
        const xhr2 = new XMLHttpRequest();
        const URL2 = `${URL}/${id}`
        // console.log(URL2)
        xhr2.open("GET", URL2);

        xhr2.onload = () => {
            const data2 = JSON.parse(xhr2.response);
            console.log(data2)
            console.log(data2.title)
        }
        xhr2.send();

    }
    else{
        console.log("something went wrong")
    }
   
}

xhr.onerror = ()=>{
    console.log("network error")
}// network na hoy tyare // computer nu internet disconnect kari jovo 

xhr.send();

// have  aa kam promise thi kariye te easy chhe next file anathi karisu 