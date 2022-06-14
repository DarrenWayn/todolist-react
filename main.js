window.addEventListener('load', () => {
    const form = document.getElementById('new-task-form');
    const input = document.getElementById('new-task-input');
    const list_el = document.getElementById('tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('submit form');
    })
})