
const user1 = {
    firstName : "harshit",
    age: 8,
    about: function(){
        console.log(this.firstName, this.age);
    }   
}

// don't do this mistake 

// user1.about();
const myFunc = user1.about.bind(user1);
myFunc();



// extra 


const user2 = {
    firstName : "ravi",
    age: 23,
    about: function(){
        console.log(this.firstName, this.age);
    }   
}

user2.about(); // aane run karta function run thase and firstName and age print thase but hve aapadee aane varibale ma store kariye to su thai jovo niche


const myFunc1 = user2.about; // function call kariya vagr sidho varibale ma store

myFunc1(); // to aahiya undefined undefined  aavse 

// const myFunc1 = user2.about; aahiya aapde aam lakhiye ano meaning am thai my func1 ni value about ma rahela function barabar chhe atale undefined aave chhe niche jovo am my func ni value function aave atale haju function call kariyo nathi atale this ni value window object aave atale undefind aave

// const myFunc1 = function(){
//     console,log(this)
//     console.log(this.firstName, this.age);
// }   

// const myFunc1 = user2.about; upar vada sathe compare karo bey same j meaning thai


// have function ne call karta pela koi variable ma store karava mate bind no use thai niche pramane



const user3 = {
    firstName : "john cena",
    age: 45,
    about: function(){
        console.log(this.firstName, this.age);
    }   
}

const myFunc3 = user3.about.bind(user3); // aam karavathi about vada function ma aavta this = user3 object thase 
myFunc3();

// khas note => arrow function ma this aam call ke bind use kravrthi change na thai




const user4 = {
    firstName : "jivan",
    age: 23,
    about: function(){
        console.log(this.firstName, this.age);
        return " i am return";
    }   
}

user4.about();  // aama return value print na thai

// const jivan = user4.about;
// jivan();//  ahiya undefined aavse but 



const jivan = user4.about(); // aam declare kari console kari return value print karavi sakay
console.log(jivan) 




