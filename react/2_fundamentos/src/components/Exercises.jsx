import { useState } from "react";

const Greeting = ({ name }) => {
  return <h1>Olá, {name}!</h1>;
};

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Você clicou {count} vezes no botão!</p>
      <button onClick={() => setCount(count + 1)}>CLIQUE</button>
      <button onClick={() => setCount(count - 1)}>DEMECRENTAR</button>
    </div>
  );
};

const TaskList = ({ tasks }) => {
  if (tasks.length === 0) {
    return <p>Não há tarefas para mostrar</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.text}</li>
      ))}
    </ul>
  );
};

const Exercises = () => {
  const tasks = [
    { id: 1, text: "Estudar TypeScript" },
    { id: 2, text: "Estudar React" },
  ];

  return (
    <div>
      <h2>Exercício 1</h2>
      <Greeting name="EDUARDO" />
      <h2>Exercício 2</h2>
      <Counter />
      <h2>Exercício 3</h2>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Exercises;
