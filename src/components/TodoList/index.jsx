import React, {useState} from 'react';
import css from "./style.module.css"

const TodoList = () => {

  const [input, setInput] = useState("")

  const inputHandler = (e) => {
    setInput(e.target.value);
  }

  const submit = () => {
    console.log(input);
  }


  return (
    <div className="container">
    <nav className = {css.nav}>
      <input className={css.input} onChange={inputHandler} value={input} type="text" placeholder='Type your Todo...'/>
      <button className={css.submitBtn} type='button' onClick={submit}>Create!</button>
    </nav>
    {/* <ul className={css.todoList}>
      <li className={css.todoItem}>input 1</li>
      <li className={css.todoItem}>input 2</li>
      <li className={css.todoItem}><p>input 3</p> <button className={css.delete}>X</button></li>

    </ul> */}
    </div>
  )
};

export default TodoList;