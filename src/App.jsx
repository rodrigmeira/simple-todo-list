import React, { useState, useEffect } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    document.title = `You have ${todos.length} tasks`;
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const minimalistStyle = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "20px",
      gap: "10px",
    },
    input: {
      padding: 10,
      borderRadius: 4,
      border: "1px solid #ccc",
      width: "30vw",
      fontSize: "1.5rem",
    },
    button: {
      padding: "6px 12px",
      borderRadius: 4,
      border: "1px solid #ccc",
      cursor: "pointer",
      backgroundColor: "#f5f5f5",
      fontWeight: "bold",
      width: "30vw",
      fontSize: "1.5rem",
    },
    todoList: { listStyle: "none", padding: 0 },
    todoItem: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 15,
      padding: 10,
      gap: "20px",
    },
    todoText: {
      textDecoration: "underline",
      textUnderlineOffset: "8px",
      textDecorationThickness: "3px",
      fontSize: "2rem",
    },
    removeButton: {
      border: "none",
      cursor: "pointer",
      padding: 2,
      textAlign: "center",
      fontSize: "1.7rem",
      backgroundColor: "transparent",
    },
  };

  return (
    <section style={minimalistStyle.container}>
      <form onSubmit={addTodo} style={minimalistStyle.form}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={minimalistStyle.input}
          placeholder="Enter a task"
        />
        <button type="submit" style={minimalistStyle.button}>
          Add Task
        </button>
      </form>
      <ul style={minimalistStyle.todoList}>
        {todos.map((todo, index) => (
          <li key={index} style={minimalistStyle.todoItem}>
            <p style={minimalistStyle.todoText}>{todo}</p>
            <button
              onClick={() => removeTodo(index)}
              style={minimalistStyle.removeButton}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default App;