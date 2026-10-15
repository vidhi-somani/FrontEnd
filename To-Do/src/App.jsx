
import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (task.trim() === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      text: task.trim(),
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter((item) => item.id !== id));
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      addTask();
    }
  }

  const completedCount = tasks.filter(
    (item) => item.completed
  ).length;

  return (
    <div className="app">
      <div className="todo-container">
        <h1>My To-Do List</h1>
        <p className="subtitle">Plan your day, one task at a time.</p>

        <div className="input-section">
          <input
            type="text"
            placeholder="Enter a new task..."
            value={task}
            onChange={(event) => setTask(event.target.value)}
            onKeyDown={handleKeyDown}
          />

          <button onClick={addTask} className="add-btn">
            Add
          </button>
        </div>

        <div className="task-summary">
          <span>Total: {tasks.length}</span>
          <span>Completed: {completedCount}</span>
        </div>

        <ul className="task-list">
          {tasks.length === 0 ? (
            <li className="empty-message">
              No tasks yet. Add your first task!
            </li>
          ) : (
            tasks.map((item) => (
              <li
                key={item.id}
                className={`task-item ${
                  item.completed ? "completed" : ""
                }`}
              >
                <label className="task-label">
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => toggleTask(item.id)}
                  />
                  <span>{item.text}</span>
                </label>

                <button
                  className="delete-btn"
                  onClick={() => deleteTask(item.id)}
                  aria-label={`Delete ${item.text}`}
                >
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>

        {tasks.length > 0 && (
          <button
            className="clear-btn"
            onClick={() => setTasks([])}
          >
            Clear All Tasks
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
