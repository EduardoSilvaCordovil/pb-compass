// DIA 5

class Users {
  name: string;
  balance: number;
  singleTransactions: number = 0;
  static totalTransactions: number = 0;

  constructor(n: string, b: number) {
    this.name = n;
    this.balance = b;
  }

  addMoney(amount: number) {
    this.balance += amount;
    this.singleTransactions++;
    Users.totalTransactions++;
  }
}

const user1 = new Users("Edu", 10);
user1.addMoney(120);
const user2 = new Users("Ardo", 20);
console.log(user1);
console.log(user2);
