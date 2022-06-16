import React from 'react'

const Main = ( { todos, editTodoHandler, removetodoHandler, doneTodoHandler } ) => {
  return (
    <>
        <main>
            <section className="task-list">
                <h2>Tasks</h2>
                    <div id="tasks">
                    {todos.map((todo) => {
                        <div className="task" key={todo.id}>
                            <div className="content">
                                <input 
                                    type="text"
                                    className="text"
                                    value={todo}
                                    readonly
                                />
                            </div>
                            <div className="actions">
                                <input 
                                    type='checkbox'
                                    check={todo.done}
                                    onChange={doneTodoHandler.bind(this, todo)}
                                />
                                {todo.activity} ({todo.done ? 'done' : 'not done'})
                                <button className='edit' onClick={editTodoHandler.bind(this, todo)}>Edit</button>
                                <button className='delete' onClick={removetodoHandler.bind(this, todo.id)} >Remove</button>
                            </div>
                        </div>
                    })}
                </div>
            </section>
        </main>
    </>
  )
}

export default Main