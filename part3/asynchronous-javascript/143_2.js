const URL = "https://jsonplaceholder.typicode.com/postss";
// url khou chhe last ma ek s vadhare che
fetch(URL)
    .then(response=>{
        if(response.ok){
            return response.json()
        }
        else{
            throw new Error("something went wrong (catch ni value ma aa return thase ")
        }
    })
    .then(data=>{
        console.log(data)
    })
    .catch(error=>{
        console.log("inside catch")
        console.log(error)
    })