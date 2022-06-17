import React from 'react'

const Header = ({ saveTodoHandler, activity, setActivity, edit, cancleTodoHandler }) => {
  return (
    <>
      <header>
          <h1>Things to do</h1>
          <form
            onSubmit={saveTodoHandler}
            id="new-task-form"
          >
            <div className='input-group'>
              <input
                  id="new-task-input"
                  type='text'
                  value={activity}
                  onChange={(e) => {setActivity(e.target.value)}}
                  autocomplete="off"
                  required=""
                  required
                  name="text"
                  className='input'
                />
                <label class="task-label">{ edit.id ? 'Edit Here' : 'Input your task here'}</label>
            </div>
              
            <div className='actions'>
              <button 
                id="new-task-submit" 
                type='submit'
              >
              { edit.id && 
                <div 
                  id="fontCancel" 
                  onClick={cancleTodoHandler}
                >
                 CANCEL
                </div>
              }
              </button>
              { 
                edit.id ? 
                <button type='submit' id='fontSave'>SAVE</button> : 
                <button type='submit' id='new-task-submit'>Submit</button>
              }
            </div>
          </form>
      </header>
    </>
  )
}

export default Header