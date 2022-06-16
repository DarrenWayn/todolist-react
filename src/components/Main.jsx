import React from 'react'

const Main = ( { todos, editTodoHandler, removetodoHandler, doneTodoHandler } ) => {
    return (
        <>
            <main>
                <section className="task-list">
                    <h2>Tasks</h2>
                    <div id="tasks">
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
            {/* <ul>
                {todos.map((todo) => {
                    return (
                        <li key={todo.id}>
                            <input 
                                type='checkbox'
                                check={todo.done}
                                onChange={doneTodoHandler.bind(this, todo)}
                            />
                            {todo.activity} ({todo.done ? 'done' : 'not done'})
                            <button className='edit' onClick={editTodoHandler.bind(this, todo)}>Edit</button>
                            <button className='delete' onClick={removetodoHandler.bind(this, todo.id)} >Remove</button>
                        </li>
                    )
                })}
            </ul> */}
        </>
    )
}

export default Main