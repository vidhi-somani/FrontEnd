
import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [filter, setFilter] = useState("All");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  // Add a new task
  const handleSubmit = (e) => {
    e.preventDefault();

    const title = task.trim();
    if (!title) return;

    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setTask("");
  };

  // Complete or uncomplete a task
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  // Delete a task
  const deleteTodo = (id) => {
    setTodos((prev) =>
      prev.filter((todo) => todo.id !== id)
    );

    if (editingId === id) {
      setEditingId(null);
      setEditText("");
    }
  };

  // Start editing
  const startEdit = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.title);
  };

  // Save edited task
  const saveEdit = (id) => {
    const title = editText.trim();
    if (!title) return;

    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, title } : todo
      )
    );

    setEditingId(null);
    setEditText("");
  };

  // Task statistics
  const totalTasks = todos.length;

  const completedTasks = todos.filter(
    (todo) => todo.completed
  ).length;

  const pendingTasks = totalTasks - completedTasks;

  // Filter tasks
  const filteredTodos = todos.filter((todo) => {
    if (filter === "Active") return !todo.completed;
    if (filter === "Completed") return todo.completed;
    return true;
  });

  return (
    <div className="app-page">
      <main className="dashboard">

        {/* Welcome heading */}
        <header className="page-header">
          <p className="welcome-text">
            Small steps every day lead to big results.
          </p>
        </header>

        {/* Statistics cards */}
        <section className="stats-grid">
          <div className="stat-card total-card">
            <div className="stat-icon">📋</div>
            <div>
              <p className="stat-label">Total Tasks</p>
              <h2>{totalTasks}</h2>
            </div>
          </div>

          <div className="stat-card pending-card">
            <div className="stat-icon">⏳</div>
            <div>
              <p className="stat-label">Remaining</p>
              <h2>{pendingTasks}</h2>
            </div>
          </div>

          <div className="stat-card completed-card">
            <div className="stat-icon">✔</div>
            <div>
              <p className="stat-label">Completed</p>
              <h2>{completedTasks}</h2>
            </div>
          </div>
        </section>

        {/* Main tasks section */}
        <section className="tasks-section">
          <div className="section-heading">
            <div>
              <h1>My Tasks</h1>
              <p>Keep track of what matters today.</p>
            </div>
          </div>

          {/* Add task form */}
          <form className="task-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="What do you need to do?"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              aria-label="New task"
            />

            <button type="submit" className="add-task-btn">
              <span>+</span> Add Task
            </button>
          </form>

          {/* Filters */}
          <div className="filter-row">
            <div className="filters">
              {["All", "Active", "Completed"].map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`filter-btn ${
                    filter === item ? "selected" : ""
                  }`}
                  onClick={() => setFilter(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <span className="task-count">
              {filteredTodos.length}{" "}
              {filteredTodos.length === 1 ? "task" : "tasks"}
            </span>
          </div>

          {/* Task list */}
          <ul className="task-list">
            {filteredTodos.length === 0 ? (
              <li className="empty-state">
                <span className="empty-icon">📝</span>
                <p>
                  {totalTasks === 0
                    ? "No tasks yet. Add your first task!"
                    : "No tasks found in this category."}
                </p>
              </li>
            ) : (
              filteredTodos.map((todo) => (
                <li className="task-item" key={todo.id}>
                  <input
                    className="task-checkbox"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                    aria-label={`Mark ${todo.title} as ${
                      todo.completed ? "incomplete" : "completed"
                    }`}
                  />

                  {editingId === todo.id ? (
                    <form
                      className="edit-form"
                      onSubmit={(e) => {
                        e.preventDefault();
                        saveEdit(todo.id);
                      }}
                    >
                      <input
                        className="edit-input"
                        type="text"
                        value={editText}
                        onChange={(e) =>
                          setEditText(e.target.value)
                        }
                        autoFocus
                        aria-label="Edit task"
                      />

                      <button
                        className="save-btn"
                        type="submit"
                      >
                        Save
                      </button>

                      <button
                        className="cancel-btn"
                        type="button"
                        onClick={() => {
                          setEditingId(null);
                          setEditText("");
                        }}
                      >
                        Cancel
                      </button>
                    </form>
                  ) : (
                    <>
                      <span
                        className={`task-title ${
                          todo.completed ? "task-done" : ""
                        }`}
                      >
                        {todo.title}
                      </span>

                      <div className="task-actions">
                        <button
                          className="edit-btn"
                          type="button"
                          onClick={() => startEdit(todo)}
                        >
                          Edit
                        </button>

                        <button
                          className="delete-btn"
                          type="button"
                          onClick={() => deleteTodo(todo.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </>
                  )}
                </li>
              ))
            )}
          </ul>
        </section>

        <footer className="dashboard-footer">
          Stay organized, one task at a time.
        </footer>
      </main>
    </div>
  );
}

export default App;
