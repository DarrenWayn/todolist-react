import React from 'react'

const Main = ( { todos, editTodoHandler, removetodoHandler } ) => {
    return (
        <>
            <main>
                <section className="task-list">
                    <h2>{ todos.length > 0 ? 'Task' : `Let's add Task!` }</h2>
                    <div id="tasks" className='text-focus-in'>
                        {todos.map((todo) => {
                            return (
                                <div className="task" key={todo.id}>
                                    <div className="content">
                                        <input 
                                            type="text"
                                            className="text"
                                            value={todo.activity}
                                            readonly
                                        />
                                    </div>
                                    <div className="actions">
                                        <button className='edit' onClick={editTodoHandler.bind(this, todo)}>Edit</button>
                                        <button className='delete' onClick={removetodoHandler.bind(this, todo.id)} >Remove</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </main>
        </>
    )
}

export default Main