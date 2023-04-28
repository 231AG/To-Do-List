const form = document.querySelector('form');
const input = document.querySelector('#new-task');
const taskList = document.querySelector('#task-list');

// Create a new task item
function createTaskItem(task) {
  const li = document.createElement('li');
  li.innerText = task;
  li.addEventListener('click', toggleCompleted);
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.classList.add('delete-task');
  deleteButton.addEventListener('click', deleteTask);
  li.appendChild(deleteButton);
  return li;
}

// Add a new task to the list
function addTask(e) {
  e.preventDefault();
  if (input.value.trim() !== '') {
    const li = createTaskItem(input.value);
    taskList.appendChild(li);
    input.value = '';
  }
}

// Toggle a task as completed
function toggleCompleted() {
  this.classList.toggle('completed');
}

// Delete a task
function deleteTask(e) {
  const li = e.target.parentElement;
  taskList.removeChild(li);
}

// Add event listeners
form.addEventListener('submit', addTask);
