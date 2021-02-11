import React, { useState } from 'react';
import TodoList from './TodoList';

const TodoApp = () => {

  const [text, setText] = useState("")
  const [item, setItems] = useState([])

  const handleSubmit = (e) => {

    e.preventDefault();

    const newItem = {
      text: text,
      id: Date.now()
    };

    setItems([...item, newItem])

    setText('')

  }

  return (

    <div>

      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div className="container">
          <a className="navbar-brand" href="index.html">To <span>Do</span></a>
        </div>
      </nav>
      <div className="overlay home-background ">
        <div className="container">

          <form className="element" onSubmit={handleSubmit}>
            <h1 htmlFor="new-todo">
              What needs to be done?
        </h1>
            <input
              id="new-todo"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
            <button className="btn btn-primary">
              Add  {item.length + 1}
            </button>
          </form>
          <div className="elemento color-white" >
            
          <TodoList todoList={item} />
          </div>

        </div>
      </div>
    </div>

  )
}



export default TodoApp;