// DIA 7

// Dia 7 - Exercício 1

interface User {
  age: number;
  name: string;
  occupation: string;
}

interface Admin {
  age: number;
  name: string;
  role: string;
}

type Person = User | Admin;

const persons: Person[] = [
  { age: 23, name: "Eduardo Cordovil", occupation: "Chimney sweep" },
  { age: 32, name: "Eduardo Silva", role: "Administrator" },
  { age: 22, name: "Eduarda Cordovil", occupation: "Developer" },
  { age: 33, name: "Max Versttappen", role: "Driver" },
];

function logPerson(person: Person) {
  let additionalInformation: string;
  if ("role" in person) {
    additionalInformation = person.role;
  } else {
    additionalInformation = person.occupation;
  }
  console.log(` - ${person.name}, ${person.age}`);
}
persons.forEach(logPerson);

// Dia 7 - Exercício 2

class Animal {
  constructor(public name: string) {}
  move(meters: number) {
    console.log(`${this.name} moved ${meters}m`);
  }
}

class Snake extends Animal {
  move(meters: number = 5) {
    console.log("Slithering...");
    super.move(meters);
  }
}

class Pony extends Animal {
  move(meters: number) {
    console.log("Galloping...");
    super.move(meters);
  }
}

const sammy = new Snake("Sammy the Snake");
sammy.move();

const pokey = new Pony("Pokey the Pony");
pokey.move(34);

// Dia 7 - Exercício 3

class Furniture {
  constructor(protected manufacturer: string = "IKEA") {}
}
class Desk extends Furniture {
  kind() {
    console.log(`This is a desk made by ${this.manufacturer}`);
  }
}

class Chair extends Furniture {
  kind() {
    console.log(`This is a desk made by ${this.manufacturer}`);
  }
}

const desk = new Desk();
desk.kind();
//desk.manufacturer

const chair = new Chair();
chair.kind();
//chair.manufacturer

// Dia 7 - Exercício 4

let multiply: (val1: number, val2: number) => number;
let capitalize: (val: string) => string;

capitalize = function (value: string): string {
  return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
};

multiply = function (x: number, y: number): number {
  return x * y;
};

console.log(capitalize(`nitfy ${multiply(5, 10)}`));

// Dia 7 - Exercício 5

function layEggs(quantity: number, color: string): void {
  console.log(`You just laid ${quantity} ${color} eggs. Good job!`);
}
layEggs(10, "Blue");
