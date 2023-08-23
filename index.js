


const newTaskInput = document.getElementById('newTask');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
const clearTasksButton = document.getElementById('clearTasks');


function addNewTask() {
  const taskText = newTaskInput.value.trim();
  if (taskText !== '') {
    const newTask = document.createElement('li');
    newTask.innerHTML = `
      <input type="checkbox">
      <span>${taskText}</span>
    `;
    taskList.appendChild(newTask);
    newTaskInput.value = '';
  }
}


addTaskButton.addEventListener('click', addNewTask);


newTaskInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); 
    addNewTask();
  }
});


taskList.addEventListener('change', function(event) {
  if (event.target.type === 'checkbox') {
    const taskText = event.target.nextElementSibling;
    if (event.target.checked) {
      taskText.style.textDecoration = 'line-through';
    } else {
      taskText.style.textDecoration = 'none';
    }
  }
});


clearTasksButton.addEventListener('click', function() {
  taskList.innerHTML = '';
});
