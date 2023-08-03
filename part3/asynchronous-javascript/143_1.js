const URL = "https://jsonplaceholder.typicode.com/posts";

// fetch ma toj error aave joo network error hoy ka toj

// but respomse.ok ni value true and false pr thi khbr pade URL sachu chhe ke ny URL khotu hoy to response ni value false aave

fetch(URL)
    .then(response=>{
        console.log(response)// anai anadr ok nam ni property chhe jeni value true ke false hoy chhe 

        console.log(response.ok)// true or false 
    })

    