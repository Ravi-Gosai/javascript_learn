// change the styles of elements
const mainHeading = document.querySelector("div.headline h2");

// div.headline h2 je div ni class headline chhe ani andr no <h2> tag select karva
console.log(mainHeading.style);
mainHeading.style.backgroundColor = "blue";
// background-color aama na lakhvu error aavse backgroudColor C capital lakhvo  

mainHeading.style.border = "20px solid green";
mainHeading.style.color = "red";
