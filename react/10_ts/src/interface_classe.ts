interface User {
  id: number;
  name: string;
  isActive: boolean;
}

const myUser: User = {
  id: 1,
  name: "Eduardo",
  isActive: false,
};

console.log(myUser);

class Person implements User {
  id: number;
  name: string;
  isActive: boolean;
  constructor(id: number, name: string, isActive: boolean) {
    this.id = id;
    this.name = name;
    this.isActive = this.isActive;
  }

  greet(isNew: boolean) {
    console.log(`OLá, meu nome é ${this.name}!`);
    if (isNew) {
        console.log("e sou novo por aqui.");
    }
  }
}

const PersonData = new Person(21, "Amanda", true);
console.log(PersonData);
PersonData.greet(false);
