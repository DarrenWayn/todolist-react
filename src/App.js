import React, { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'

const App = () => {
  const [activity, setActivity] = useState('')
  const [edit, setEdit] = useState({})
  const [todos, setTodos] = useState([])

  const generateId = () => {
    return Date.now()
  }

  const saveTodoHandler = (e) => {
      e.preventDefault()

      if (edit.id) {
          const updatedTodo = {
              ...edit,
              activity
          }

          const editTodoIndex = todos.findIndex((todo) => {
              return todo.id === edit.id
          })

          //jangan direct dari editTodoIndex kita clone dulu di updatesTodos
          const updatedTodos = [...todos]

          updatedTodos[editTodoIndex] = updatedTodo
          setTodos(updatedTodos)

          return cancleTodoHandler()
          
      }

      setTodos([
          ...todos, 
          {
              id : generateId(),
              activity
          }
      ])
      setActivity('')
  }

  const removetodoHandler = (todoId) => {
      const filteredTodos = todos.filter((todo) => {
          return todo.id !== todoId
      })

      setTodos(filteredTodos)
      if(edit.id) {
          cancleTodoHandler()
      }
  }

  const editTodoHandler = (todo) => {
      setActivity(todo.activity)
      setEdit(todo)
  }

  const cancleTodoHandler = () => {
      console.log('cancel edit')
      setEdit({}) 
      setActivity('') 
  }

  const doneTodoHandler = (todo) => {
      const updatedTodo = {
          ...todo,
          done: todo.done ? false : true
      }

      const editTodoIndex  = todos.findIndex((currentTodo) => {
          return currentTodo.id = todo.id
      })

      const updatedTodos = [...todos]
      updatedTodos[editTodoIndex] = updatedTodo
      setTodos(updatedTodos)
  }

  return (
    <div className='container'>
      <Header
        saveTodoHandler={saveTodoHandler}
        activity={activity}
        setActivity={setActivity}
        edit={edit}
        cancleTodoHandler={cancleTodoHandler}
      />
      <Main
        todos={todos}
        editTodoHandler={editTodoHandler}
        doneTodoHandler={doneTodoHandler}
        removetodoHandler={removetodoHandler}
      />
    </div>
  )
}

export default App