const myUser = {
    id: 1,
    name: "Eduardo",
    isActive: false,
};
console.log(myUser);
class Person {
    constructor(id, name, isActive) {
        this.id = id;
        this.name = name;
        this.isActive = this.isActive;
    }
    greet(isNew) {
        console.log(`OLá, meu nome é ${this.name}!`);
        if (isNew) {
            console.log("e sou novo por aqui.");
        }
    }
}
const PersonData = new Person(21, "Amanda", true);
console.log(PersonData);
PersonData.greet(false);
