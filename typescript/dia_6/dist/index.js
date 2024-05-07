"use strict";
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
console.log(movie1);*/
class Movies {
    /*readonly id: number;
    nae: string;*/
    constructor(id, name) {
        this.id = id;
        this.name = name;
        /*this.id = id;
        this.name = name;*/
    }
}
let movie1 = new Movies(1, "Shrek");
console.log(movie1);
