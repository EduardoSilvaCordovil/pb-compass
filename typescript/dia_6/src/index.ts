// DIA 6

/*class Movies {
  readonly id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

let movie1 = new Movies(1, "Shrek");
console.log(movie1);

class Movies {
  constructor(
    public readonly id: number,
    public name: string,
    private _price?: number
  ) {}
}

let movie1 = new Movies(1, "Shrek", 45.5);
console.log(movie1);

class HotelRooms {
  [roomNumber: string]: string;
}

let room = new HotelRooms();
room.A201 = "Edu";
room.A202 = "Ardo";
console.log(room);

class Person {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number
  ) {}
  greet() {
    console.log("Hi");
  }
}

class Clients extends Person {
  balance() {
    console.log("Your balance is $100");
    
  }
}

let client1 = new Clients("Eduardo", "Cordovil", 23);
// client1.*/

class Person {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number
  ) {}
  get greet() {
    return this.firstName + " " + this.lastName;
  }
}

class Clients extends Person {
  override get greet() {
    return "Dear " + super.greet;
  }
}

class Staff extends Person {
  override get greet() {
    return "Hi " + super.greet
  }
}

let client1 = new Clients("Eduardo", "Cordovil", 23);
let staff = new Staff("Eduardo", "Silva", 32);

console.log(client1.greet);
console.log(staff.greet);
