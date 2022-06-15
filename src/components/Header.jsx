import React from 'react'

const Header = () => {
  return (
    <header className="col-12-xs col-5-sm col-3-xl">
        <h1>Things to do</h1>
        <form  id="new-task-form" action="">
            <input
                type="text"
                id="new-task-input"
                placeholder="input task here"
                maxlength="30"
                autocomplete="off"
                required
            />
            <input 
                type="submit"
                id="new-task-submit"
                value="Add task"
            />
        </form>
    </header>
  )
}

export default Header