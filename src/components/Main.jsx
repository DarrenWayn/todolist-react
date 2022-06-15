import React from 'react'

const Main = () => {
  return (
    <main>
        <section class="task-list">
            <h2>Tasks</h2>

            <div id="tasks">
                <div class="task">
                    <div class="content">
                        <input 
                            type="text"
                            class="text"
                            value="My Task"
                            readonly
                        />
                    </div>
                    <div class="actions">
                        <button class="edit">Edit</button>
                        <button class="delete">Delete</button>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Main