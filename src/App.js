import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Form';
import List from './List';
import todoService from './service/todos';

function App() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    todoService.getAll().then((res) => {
      const todos = res.data
      setTodos(todos)
    })
  }, [])
  const addTodo = (value) => {
    const newTodo = {
      text: value
    }
    todoService.add(newTodo)
      .then((res) => {
        todoService.getAll().then((res) => {
          setTodos(todos.concat(res.data))
        })
      })
  }
  const deleteTodo = (id) => {
    todoService.remove(id)
    .then((res) => {
      todoService.getAll().then((res) => {
        const todos = res.data
        setTodos(todos)
      })
    })
  }
  return (
    <>
      <Form addTodo={addTodo} />
      <List todos={todos} deleteTodo={deleteTodo} />
    </>
  )
}


export default App;
