import React, { useState, useEffect } from "react";
import css from "./style.module.css";

const TodoList = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const storedTodo = JSON.parse(localStorage.getItem('todoTasks' || []));
    setTasks(storedTodo)
  }, [])

  useEffect(() => {
    localStorage.setItem('todoTasks', JSON.stringify(tasks))
  }, [tasks])
  
  

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  console.log(tasks);

  const handleAddTask = () => {
    setTasks([
      ...tasks,
      {
        text: input,
        done: false,
      },
    ]);
    setInput("");
    if (input.trim() != "") {
      setTasks([
        ...tasks,
        {
          text: input,
          done: false,
        },
      ]);
      setInput("");
    }
  };

  const handleDeleteTask = (index) => {
    const del = confirm("Do you want to delete this task?")
    if (del) {
      const updatedTask = tasks.filter((_, item) => item !== index);
      setTasks(updatedTask);
    }
  };

  const handleToggleChange = (index) => {
    const updatedTask = [...tasks];
    updatedTask[index].done = !updatedTask[index].done;
    setTasks(updatedTask);
  };

  console.log(tasks);

  return (
    <div className="container">
      <form className={css.nav}>
        <input
          className={css.input}
          onChange={inputHandler}
          value={input}
          type="text"
          placeholder="Type your Todo..."
        />
        <button
          className={css.submitBtn}
          type="button"
          onClick={handleAddTask}
          disabled={!input.trim()}
        >
          Create!
        </button>
      </form>
      <ul className={css.todoList}>
        {tasks.map((el, i) => (
          <li check key={i} className={css.todoItem}>
            <input
              onChange={() => handleToggleChange(i)}
              className={css.checkBox}
              checked={el.done}
              type="checkBox"
            />
            <p className={ el.done? css.checkedTodoText : css.todoText}>{el.text}</p>
            <button onClick={() => handleDeleteTask(i)} className={css.delete}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
