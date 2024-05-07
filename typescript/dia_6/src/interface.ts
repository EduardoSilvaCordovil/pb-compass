/* interface Item {
  name: string;
  price: number;
  itemPurchased(message: string): void;
}

let product1: Item;

product1 = {
  name: "Notebook",
  price: 2.5,
  itemPurchased(message: string) {
    console.log(message + this.name);
  },
};

product1.itemPurchased("You just bought a: ");

// Dia 5 - Exercício 1

interface CartItem {
  id: number;
  title: string;
  variantId?: number;
}

function addToCart(item: CartItem) {
  console.log(`Adding "${item.title}" to cart.`);
}

addToCart({ id: 1, title: "shoes" });

// Dia 5 - Exercício 2

interface Person {
  name: string;
  age: number;
}

class Person {
  constructor(public name: string, public age: number) {}
}

const jane = new Person("Jane", 23);
console.log(`${jane.name} is ${jane.age} years old.`);

class MC {
  greet(event: string = "party"): string {
    return `Welcome to the ${event}`;
  }
}

const mc = new MC();
console.log(mc.greet("show"));

// Dia 5 - Exercício 4

class Employee {
  constructor(public title: string, public salary: number) {}
}

const employee = new Employee("Engineer", 10000);
console.log(
  `The new emplyeeś title is ${employee.title} and they earn $ ${employee.salary}`
); */

// Dia 5 - Exercício 5

interface UserSchema {
  id: number;
  name: string;
}

class User implements UserSchema {
  constructor(public name: string, readonly id: number) {}
}

const user = new User("Dog", 1);
console.log(user.id);

//user.id = 5;
user.name = "Harold";
console.log("User", user);
