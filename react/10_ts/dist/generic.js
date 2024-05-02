function getArray(items) {
    return new Array().concat(items);
}
let numberArray = getArray([1, 2, 3, 4]);
let stringArray = getArray(["Eduardo", "Silva", "Cordovil"]);
console.log(numberArray, stringArray);
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const result = merge({ name: "Eduardo", age: 23 }, { job: "Vagabundo", isActive: true });
console.log(result);
function updateTodo(todo, fieldsToUpdate) {
    return Object.assign(Object.assign({}, todo), fieldsToUpdate);
}
const meuTodo = {
    title: "Estudar React and TS",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
    completed: false,
};
const todoAtualizado = updateTodo(meuTodo, { completed: true });
console.log(todoAtualizado);
const meuSegundoTodo = {
    title: "Estudar AWS",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
    completed: false,
};
