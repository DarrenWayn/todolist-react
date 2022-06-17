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
            <input
              id="new-task-input"
              type='text'
              placeholder="input task here ...."
              value={activity}
              onChange={(e) => {setActivity(e.target.value)}}
              autocomplete="off"
              required
            />
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
                 Cancel
                </div>
              }
              </button>
              { 
                edit.id ? 
                <button type='submit' id='fontSave'>Save</button> : 
                <button type='submit' id='new-task-submit'>Submit</button>
              }
            </div>
          </form>
      </header>
    </>
  )
}

export default Header