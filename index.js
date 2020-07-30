let tasks = [];

const generateID = () => {
  return Math.random().toString(36).substring(2, 15);
}

const updateTaskListView = () => {
  const taskList = document.querySelector("#taskList");
  taskList.innerHTML = null;

  tasks.forEach(task => {
    const div = document.createElement('div');
    const checked = task.checked ? 'checked' : '';
    div.classList.add("task");
    if(task.checked) {
      div.classList.add("task--checked");
    }
    div.id = task.id;
    div.innerHTML = `
      <input 
        type="checkbox" 
        class="task__check" 
        ${ checked }
        onclick="checkTask(\`${task.id}\`)" 
      />
      <p class="task__text">${task.text}</p>
      <div class="task__actions" onclick="removeTask(\`${task.id}\`)">
        <i class="fas fa-trash-alt task__delete"></i>
      </div>
    `;
    taskList.appendChild(div);
  });
}

const checkTask = (id) => {
  tasks = tasks.map(task => task.id === id ? {...task, checked: !task.checked } : task);
  updateTaskListView();
}

const removeTask = (id) => {
  tasks = tasks.filter(task => task.id !== id);
  updateTaskListView();
}

const addTask = () => {
  const addTaskInput = document.querySelector("#addTaskInput");
  const inputValue = addTaskInput.value;

  if ( !inputValue ) {
    return;
  }

  tasks.push({
    id: generateID(),
    text: inputValue,
    checked: false
  });

  addTaskInput.value = null;
  updateTaskListView();
}

const main = () => {
  const addTaskIcon = document.querySelector("#addTaskIcon");
  const addTaskInput = document.querySelector("#addTaskInput");
  addTaskIcon.addEventListener('click', addTask);
  addTaskInput.addEventListener('keydown', ($event) => {
    if (event.code === "Enter") {
      addTask();
    }
  });
}

window.onload = main;
