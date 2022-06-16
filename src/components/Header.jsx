import React, { useState } from 'react'
import Main from './Main'

const Header = () => {
  const [activity, setActivity] = useState('')
  const [edit, setEdit] = useState({})
  const [todos, setTodos] = useState([])
  const [message, setMessage] = useState('')

  const generateId = () => {
    return Date.now()
  }

  const saveTodoHandler = (e) => {
      e.preventDefault()

      if(!activity) {
          return setMessage('Activity cant be empty')
      }

      setMessage('')
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
    <>
      <header>
          {/* <img src='../assets/images/homepage-sass.png' alt='test' /> */}
          <h1>Things to do</h1>
          {message && 
              <div style={{color:'red'}}>
                  {message}
              </div>
          }
          <form
            onSubmit={saveTodoHandler}
            id="new-task-form"
          >
            <input
              id="new-task-input"
              type='text'
              placeholder="input task here"
              value={activity}
              onChange={(e) => {setActivity(e.target.value)}}
              autocomplete="off"
              required
            />
            <button 
              id="new-task-submit" 
              type='submit'
            >
            {edit.id && 
              <button 
                id="new-task-submit" 
                onClick={cancleTodoHandler}
              >
                Cancel
              </button>
            }
              {edit.id ? 'Save Changes' : 'Add'}
            </button>
          </form>
      </header>
      <Main
        todos={todos}
        editTodoHandler={editTodoHandler}
        doneTodoHandler={doneTodoHandler}
        removetodoHandler={removetodoHandler}
      />
    </>
  )
}

export default Header