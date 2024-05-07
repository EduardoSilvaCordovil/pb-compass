"use strict";
// DIA 1
/*console.log("HELLO, WORLD!!!");
let a = 10;
function add(num1: number, num2: number) {
  return num1 + num2;
}
let result = add(5, 8);
console.log(result);*/
// DIA 2
// Any
let price = 40;
// let item = 'apple'
let inStore = true;
let value;
// Array
let values = [10, 20, 30, 40, 50];
// Tuplas
let item = ["Linux", 3, true];
// enum
/*const admin = 1
const read = 2
const backup = 3*/
var Role;
(function (Role) {
    Role[Role["admin"] = 1] = "admin";
    Role[Role["read"] = 2] = "read";
    Role[Role["backup"] = 3] = "backup";
})(Role || (Role = {}));
/*const user = {
  firstName: "Eduardo",
  age: 23,
  role: Role.backup,
};
console.log(user);*/
/*function add(num1: number, num2: number) {
  return num1 + num2;
}

// void

function result(price: number) {
  console.log(price);
}
console.log(result(add(6, 3)));*/
// objetos
/*const user = {
  firstName: "Eduardo",
  age: 23,
  lastName: "S",
};

user.lastName = "Cordovil";*/
// unknow
let itemInput;
let itemName;
itemInput = 10;
itemInput = "Linux";
if (itemInput === "string") {
    itemName = itemInput;
}
const user = {
    firstName: "Eduardo",
    age: 23,
};
console.log(user);
function userInput(input1, input2) {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinePrices = userInput(10, 20);
console.log(combinePrices);
const combineName = userInput("Maça", "Banana");
console.log(combineName);
