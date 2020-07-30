const main = () => {
    const addTaskIcon = document.querySelector("#addTaskIcon");
    const addTaskInput = document.querySelector("#addTaskInput");
    addTaskIcon.addEventListener('click', addTask);
    addTaskInput.addEventListener('keydown', ($event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });
}

const removeTask = (div) => {
    console.log(div);
}

const addTask = () => {
    const addTaskInput = document.querySelector("#addTaskInput");
    const inputValue = addTaskInput.value;
    const taskList = document.querySelector("#taskList");

    // Nothing happens if value is empty
    if (!inputValue) {
        return;
    }

    // Task is added to the list
    const div = document.createElement('div');
    div.classList.add("task");
    const content = `
      <input type="checkbox" class="task__check"/>
      <p class="task__text">${inputValue}</p>
      <div class="task__actions" onclick="removeTask(div)">
        <i class="fas fa-trash-alt task__delete"></i>
      </div>
    `
    div.innerHTML = content;
    const lastContent = taskList.appendChild(div);

    // Input reset
    addTaskInput.value = null;
}

window.onload = main;
