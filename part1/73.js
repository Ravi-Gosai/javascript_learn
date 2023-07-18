function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician);
}
const user1 = {
    firstName : "harshit",
    age: 8,   
}
const user2 = {
    firstName : "mohit",
    age: 9,
    
}

// apply
// about.apply(user1, ["guitar", "bach"]);
// const func = about.bind(user2, "guitar", "bach");
// func();



// extra



function hello_1(){
    console.log("hello ravi");

}

// hello_1(); // function ne bije rite pn call kari sakay niche pramane

hello_1.call();


const user_1 = {
    firstName: "ravi",
    age: 23,
    about: function(){
        console.log(this.firstName, this.age)
    }
}

user_1.about(); // jo aahiya call use karvu hoy to this ni value aapya mate call ni anadr value aapvi pade baki undefined aavse 

// user_1.about.call(); // output undefined aavse this ni value call ma ny aapel


const user_2 = {
    firstName: "virat",
    age: 35
}

user_1.about.call(user_2) // call ni andar je object lakhel hoy a this barabar thai jai aahiya (this = user_2)
// upar aapde user_1 na function thi user_2 ma a function run karavyo




const user_3 = {
    firstName: "ravi",
    age: 23,
    about: function(hobby1 , favSinger){
        console.log(this.firstName, this.age, hobby1, favSinger)
    }
}

const user_4 = {
    firstName: "rajveer",
    age: 30
}

user_3.about.call(user_4, "guitar",) // favSinger undefined aavse

user_3.about.call(user_4, "guitar", "kk") 


// upar nu kam kariyu te have aapde function bahar declere kari kari sakay niche mujab




function about_1(hobby1 , favSinger){
    console.log(this.firstName, this.age, hobby1, favSinger)
}

const user_5 = {
    firstName: "ravi",
    age: 23,
    
}

const user_6 = {
    firstName: "rajveer",
    age: 30
}

about_1.call(user_5, "cricket", "atif");

about_1.call(user_6, "runing", "araman");


// .call ni .apply same j work kare but apply ma perameter ne array ma aapvama aave chhe

about_1.apply(user_5, ["chess", "neha"]); // apply ma perameter ne array ma aapva pade

//bind a function return kare
about_1.bind(user_5, "moive", "kk"); // atyare aam karvathi kai output ny aave becouse bind a function return kare

const bindFunc = about_1.bind(user_5, "moive", "kk");  // have bindFunc ne as function run karta output aavse

bindFunc();