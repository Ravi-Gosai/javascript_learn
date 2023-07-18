// splice method 
// start , delete , insert 

// const myArray = ['item1', 'item2', 'item3'];

// delete
// const deletedItem = myArray.splice(1, 2);
// console.log("delted item", deletedItem);
// insert 
// myArray.splice(1, 0,'inserted item');

// insert and delete 
// const deletedItem = myArray.splice(1, 2, "inserted item1", "inserted item2")
// console.log("delted item", deletedItem);
// console.log(myArray);



// extra


const myArray = ['item1', 'item2', 'item3', 'item4', 'item5'];

// delete

let deleteItem = myArray.splice(1,2);

console.log(myArray); // oraginal array modify kari return karse

console.log(deleteItem) // delete thai gayel item no new array banavse

// xxx.splice(X,Y)
// X = je index thi delete karvu te index number 
// Y = jtali item delete karvi ani quntity(sankhya)
// orinal array modify kare splice method




//insert

const myArray_1 = ['item1', 'item2', 'item3', 'item4', 'item5'];

myArray_1.splice(1,0,'inserted item')

console.log(myArray_1)



// delete and insert

const myArray_2 = ['item1', 'item2', 'item3', 'item4', 'item5'];

myArray_2.splice(2,2,"ravi")

console.log(myArray_2)
