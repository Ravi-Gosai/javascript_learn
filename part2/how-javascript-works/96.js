// function execution context 

let foo = "foo";
console.log(foo);
function getFullName(firstName, lastName){
    console.log(arguments); // perameter no array like object cteate thai .have bov use ny thato aano
    let myVar = "var inside func";
    console.log(myVar);
    const fullName = firstName + " " + lastName;
    return fullName;
}

const personName = getFullName("harshit", "sharma");
console.log(personName);