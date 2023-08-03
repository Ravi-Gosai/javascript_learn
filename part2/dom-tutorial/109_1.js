let navItems = document.querySelectorAll("a"); 
console.log(navItems) // nodelist aave output

// nodelist ma nicheni treney loop use kari sakay chhe 
// simple for loop 
// for of loop 
// forEach 

// 1st simple for loop 

// for(let i=0; i< navItems.length; i++){
//     console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }


// for of loop 

// 

// forEach

navItems.forEach((navItem)=>{
    navItem.style.backgroundColor ="#fff";
    navItem.style.color = "green";
    navItem.style.fontWeight = "bold";
})


// nodelist ne pn array ma change kari sakay

navItems = Array.from(navItems);
console.log(navItems) // array aavse output have aapde aama use kari sakay chhe array method 





