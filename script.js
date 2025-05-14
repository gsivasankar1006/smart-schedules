
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
      li.style.textDecoration = this.checked ? 'line-through' : 'none';
    });
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(' ' + taskText));
    taskList.appendChild(li);
    taskInput.value = '';
  }
}