let form = document.querySelector('form');

form.addEventListener('submit', function(evet){
    evet.preventDefault();
    let obj = {
        Amount: document.getElementById('exampleFormControlInput1').value,
        dec : document.getElementById('exampleFormControlTextarea1').value,
        type : document.getElementById('exampleFormControlSelect1').value
    }
    // console.log(obj)
    // console.log(ul)
    
    let ul = document.querySelector('ul');
    let li = document.createElement('li');

    li.innerHTML = `${obj.Amount}--${obj.dec}--${obj.type}<button class="btn btn-primary" onclick="del(event)">Delete</button><button class="btn btn-primary" onclick="edit(event)">Edit</button>`;
    ul.appendChild(li);
    // console.log(obj['dec'])
    localStorage.setItem(obj['dec'], JSON.stringify(obj));

})

function del(event){
    let ul = document.querySelector('ul');

    console.log(event.target.parentElement.firstChild.textContent.split('--')[1])
    localStorage.removeItem(event.target.parentElement.firstChild.textContent.split('--')[1]);
    ul.removeChild(event.target.parentElement);
    
}

function edit(event){
    let ul = document.querySelector('ul');

    localStorage.removeItem(event.target.parentElement.firstChild.textContent.split('--')[1]);
    
    document.getElementById('exampleFormControlInput1').value = event.target.parentElement.firstChild.textContent.split('--')[0];

    document.getElementById('exampleFormControlTextarea1').value = event.target.parentElement.firstChild.textContent.split('--')[1];

    document.getElementById('exampleFormControlSelect1').value = event.target.parentElement.firstChild.textContent.split('--')[2]
    ul.removeChild(event.target.parentElement);


}