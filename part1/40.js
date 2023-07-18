// spread operator
// const array1 = [1, 2, 3];
// const array2 = [5, 6, 7];

// // const newArray = [...array1, ...array2, 89, 69];
// const newArray = [..."123456789"];
// console.log(newArray);

// spread operator in objects
// const obj1 = {
//   key1: "value1",
//   key2: "value2",
// };
// const obj2 = {
//   key1: "valueUnique",
//   key3: "value3",
//   key4: "value4",
// };

// const newObject = { ...obj2, ...obj1, key69: "value69" };
// const newObject = { ...["item1", "item2"] };
// const newObject = { ..."abcdefghijklmnopqrstuvwxyz" };
// console.log(newObject);


//extra


// // spread operator array mate
const array1 = [1,2,3];
const array2 = [5,6,7];
const newarray = [...array1, ...array2, 34, 43];
console.log(newarray)

const newarray2 = ["abc"]
console.log(newarray2)

const newarray3 = [..."abc"]
console.log(newarray3)  // a,b,c am alag alag thai jase

const newarray4 = [..."132436477474"]
console.log(newarray4)

//// spread operator object mate

const obj = {
  key1 : "value1",
  key2 : "value2",
  key1 : "value34"
}
// key1 be var aave to last vadi lese console ma 
console.log(obj)

const obj1 = {
  key1 : "value1",
  key2 : "value2"
}

const obj2 = {
  key3 : "value3",
  key4 : "value4"
}
// array ni jem Object ne clone karva mate
const newObj = {...obj1,...obj2}
console.log(newObj)
//jo obj1 and obj2 ma same key hot to last vadi j print thase

const newOBJECT = {..."abc"}
console.log(newOBJECT)//index khud key bani jase

const newOBJECT2 = {...["item1", "item2", "item3"]}
console.log(newOBJECT2)// index khud key bani jase 
