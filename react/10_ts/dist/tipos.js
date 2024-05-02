let isActive;
isActive = true;
let total = 150;
let myName = "Eduardo";
console.log(typeof isActive, typeof total, typeof myName);
let isComplete = false;
let amount = 200;
let username = "Leticia";
console.log(typeof isComplete, typeof amount, typeof username);
let money;
console.log(typeof money);
money = 200;
console.log(typeof money);
let numbers = [1, 2, 3];
console.log(typeof numbers);
let user = {
    name: "Eduardo",
    age: 23,
};
let rgb = [255, 0, 0];
console.log(typeof rgb, rgb);
function greet(nome) {
    return `Olá, ${nome}`;
}
console.log(greet("Eduardo"));
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
function getDirectionMessage(direction) {
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
