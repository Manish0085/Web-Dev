const form = document.getElementById('todoForm');
const tasks = document.getElementById('allTask');
const input = document.getElementById('task');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const text = input.value.trim();
    if (!text) return;

    const parent = document.createElement('div');

    const span = document.createElement('span');
    span.textContent = text;

    const doneButton = document.createElement('button');
    doneButton.textContent = "Done";

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";

    parent.append(span, doneButton, deleteButton);
    tasks.append(parent);

    doneButton.addEventListener('click', () => {
        span.style.textDecoration = 'line-through';
        span.style.color = 'grey';
        doneButton.disabled = true;
        doneButton.style.background = 'rgba(0,0,0,0.2)';
        doneButton.style.cursor = 'default';
    });

    deleteButton.addEventListener('click', () => parent.remove());

    form.reset();
});
