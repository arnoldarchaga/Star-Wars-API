function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    if (dragSrcEl != this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }
    return false;
}

function handleDragEnd(e) {
    this.style.opacity = '1';
    [].forEach.call(items, function (item) {
        item.classList.remove('over');
    });
}

function addtask() {
    var taskValue = document.getElementById('todo-input').value;
    var dueDateValue = document.getElementById('due-date-input').value;
    var ul = document.getElementById('todo-list');
    var li = document.createElement('li');
    li.innerHTML = `<span class="task">${taskValue}</span> <span class="due-date">${dueDateValue}</span> <span class="checkmark">&#10003;</span>`;
    li.className = 'todo-item';
    li.addEventListener('click', function() {
        this.classList.toggle('done');
    });
    ul.appendChild(li);
    document.getElementById('todo-input').value = '';
    document.getElementById('due-date-input').value = '';
}

document.getElementById('add-btn').addEventListener('click', addtask);
    var taskValue = document.getElementById('todo-input').value;
    var dueDateValue = document.getElementById('due-date-input').value;
    var ul = document.getElementById('todo-list');
    var li = document.createElement('li');
    li.innerHTML = `<span class="task">${taskValue}</span> <span class="due-date">${dueDateValue}</span> <span class="checkmark">&#10003;</span>`;
    li.className = 'todo-item';
    li.draggable = true;
    addEventListenersToTask(li);
    ul.appendChild(li);
    document.getElementById('todo-input').value = '';
    document.getElementById('due-date-input').value = '';
