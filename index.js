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

const addTask = () => {
    const addTaskInput = document.querySelector("#addTaskInput");
    const inputValue = addTaskInput.value;
    const taskList = document.querySelector("#taskList");

    // TODO - añadir a la lista el valor del input aqui
    console.log(inputValue);

    addTaskInput.value = null;
}

window.onload = main;
