const Task = ({ task, onDelete, onToggleDone }) => {
  return (
    <li>
      <span
        onClick={onToggleDone}
        style={{ TextDecoration: task.done ? "line-trough" : "none" }}
      >
        {task.text}
      </span>
      <button onClick={onDelete}>Remover</button>
    </li>
  );
};

export default Task;
