let isActive: boolean;
isActive = true;
let total: number = 150;
let myName: string = "Eduardo";
console.log(typeof isActive, typeof total, typeof myName);

let isComplete = false;
let amount = 200;
let username = "Leticia";
console.log(typeof isComplete, typeof amount, typeof username);

let money;
console.log(typeof money);
money = 200;
console.log(typeof money);

let numbers: number[] = [1, 2, 3];
console.log(typeof numbers);
let user: { name: string; age: number } = {
  name: "Eduardo",
  age: 23,
};

let rgb: [number, number, number] = [255, 0, 0];
console.log(typeof rgb, rgb);

function greet(nome: string): string {
  return `Olá, ${nome}`;
}
console.log(greet("Eduardo"));

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

function getDirectionMessage(direction: Direction): string {
  switch (direction) {
    case Direction.Up:
      return "Movendo para cima";
    case Direction.Down:
      return "Movendo para baixo";
    case Direction.Left:
      return "Movendo para a esquerda";
    case Direction.Right:
      return "Movendo para a direita";
    default:
      return "Ficou parado";
  }
}
console.log(getDirectionMessage(Direction.Up));
console.log(getDirectionMessage(Direction.Down));
console.log(getDirectionMessage(Direction.Left));
console.log(getDirectionMessage(Direction.Right));
// console.log(getDirectionMessage(Direction.Diagonal));