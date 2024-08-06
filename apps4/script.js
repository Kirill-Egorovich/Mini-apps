/* Задание
Реализовать функционал мини таск-менеджера. 
*/

document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const markAllDoneBtn = document.getElementById('mark-all-done');

    taskForm.addEventListener('submit', function (e) {
        e.preventDefault();
        addTask(taskInput.value);
        taskInput.value = '';
    });

    function addTask(task) {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const span = document.createElement('span');
        span.textContent = task;
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'x';
        removeBtn.classList.add('remove-btn');

        li.prepend(checkbox);
        li.appendChild(span);
        li.appendChild(removeBtn);

        taskList.prepend(li);

        checkbox.addEventListener('change', function () {
            if (this.checked) {
                li.classList.add('completed');
                taskList.appendChild(li);
            } else {
                li.classList.remove('completed');
                taskList.prepend(li);
            }
        });

        removeBtn.addEventListener('click', function () {
            li.remove();
        });
    }

    markAllDoneBtn.addEventListener('click', function () {
        const tasks = taskList.querySelectorAll('li');
        tasks.forEach(task => {
            const checkbox = task.querySelector('input[type="checkbox"]');
            checkbox.checked = true;
            task.classList.add('completed');
            taskList.appendChild(task);
        });
    });
});
