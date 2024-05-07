"use strict";
// DIA 5
class Users {
    constructor(n, b) {
        this.singleTransactions = 0;
        this.name = n;
        this.balance = b;
    }
    addMoney(amount) {
        this.balance += amount;
        this.singleTransactions++;
        Users.totalTransactions++;
    }
}
Users.totalTransactions = 0;
const user1 = new Users("Edu", 10);
user1.addMoney(120);
const user2 = new Users("Ardo", 20);
console.log(user1);
console.log(user2);
