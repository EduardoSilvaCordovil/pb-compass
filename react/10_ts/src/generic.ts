function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}
let numberArray = getArray([1, 2, 3, 4]);
let stringArray = getArray(["Eduardo", "Silva", "Cordovil"]);
console.log(numberArray, stringArray);

function merge<T extends object, U extends object>(obj1: T, obj2: U) {
  return { ...obj1, ...obj2 };
}
const result = merge(
  { name: "Eduardo", age: 23 },
  { job: "Vagabundo", isActive: true }
);
console.log(result);

type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const meuTodo: Todo = {
  title: "Estudar React and TS",
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
  completed: false,
};

const todoAtualizado = updateTodo(meuTodo, { completed: true });
console.log(todoAtualizado);

const meuSegundoTodo: Readonly<Todo> = {
  title: "Estudar AWS",
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
  completed: false,
};
