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
let values: number[] = [10, 20, 30, 40, 50];

// Tuplas
let item: [string, number, boolean] = ["Linux", 3, true];

// enum

/*const admin = 1
const read = 2
const backup = 3*/

enum Role {
  admin = 1,
  read = 2,
  backup = 3,
}

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

let itemInput: unknown;
let itemName: string;

itemInput = 10;
itemInput = "Linux";
if (itemInput === "string") {
  itemName = itemInput;
}

// never

/*function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}
generateError("The application crashed", 500);
console.log(generateError("The application crashed", 500));*/

// DIA 3

// alias type

type Users = {
  firstName: string;
  age: number;
};

const user: Users = {
  firstName: "Eduardo",
  age: 23,
};
console.log(user);

function userInput(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinePrices = userInput(10, 20);
console.log(combinePrices);

const combineName = userInput("Maça", "Banana");
console.log(combineName);

// literal type

let productPrice: 10 | 20 | 30;
let productSize: "S" | "M" | "L";
productPrice = 30;
productSize = "S";

// intersection

type User = {
  ffirstName: string;
  age: number;
};

type JobRole = {
  id: number;
  role: string;
};

type employee = User & JobRole;

const e1: employee = {
  age: 23,
  id: 122,
  role: "Developer",
  ffirstName: "Eduardo",
};

// Dia 3 - Exercício 1

let pi = 3.14159;
let tau = pi * 2;
console.log(`${tau} is ${pi} times two.`);

// Dia 3 - Exercício 2

let pie: string;
pie = "blueberry";
console.log(`I like to eat ${pie}-flavored pie`);

// Dia 3 - Exercício 3

let isDouglas: boolean = true;
//let isDouglas: boolean = false
console.log(`${isDouglas ? "Oh, hi Douglas" : "Who are you?"}`);

// Dia 3 - Exercício 4

const integer: number = 6;
const hex: number = 0xf00d;
const float: number = 6.66;
const negZero: number = -0;
const octal: number = 0o744;
const actuallyNumber: number = NaN;
const binary: number = 0b1010011010;
const mostBiglyNumber: number = Infinity;
const largestNumber: number = Number.MAX_VALUE;

const members: number[] = [
  hex,
  float,
  octal,
  binary,
  integer,
  negZero,
  largestNumber,
  actuallyNumber,
  mostBiglyNumber,
];
members[0] = 12345;
console.log(members);

// Dia 3 - Exercício 5

const sequence: number[] = Array.from(Array(10).keys());
const stringAndNumbers: (number | string)[] = [1, "one", 2, "two", 3, "three"];
const animals: string[] = ["echidna", "pangolin", "aardvark", "binturong"];
const allMyArrays: (number | string)[][] = [sequence, animals, stringAndNumbers];
console.log(allMyArrays);
