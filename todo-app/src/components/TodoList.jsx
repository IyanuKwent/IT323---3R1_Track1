import { useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState([]); // State to hold the list of tasks
  const [task, setTask] = useState("");  // State to handle new task input

  // Function to remove a task by index
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Function to add a new task
  const addTask = () => {
    if (task.trim() === "") return; // Prevent adding empty tasks
    setTasks([...tasks, task]);
    setTask(""); // Clear the input field after adding
  };

  return (
    <div className="todo-container">
      <h2>To-Do List</h2>
      <input
        type="text"
        placeholder="Add a new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((t, index) => (
          <li key={index} onClick={() => removeTask(index)}>
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}
