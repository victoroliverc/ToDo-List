var btnToDo = document.getElementById("btn-todo");
var btnDoing = document.getElementById("btn-doing");

btnToDo.addEventListener("click", addTodoTask);
btnDoing.addEventListener("click", addDoingTask);

/* This function displays the saved tasks on local storage */
onload = function () {
    let todoTaskArea = document.getElementsByClassName("tasks")[0];
    let doingTaskArea = document.getElementsByClassName("tasks")[1];
    
    todoTaskArea.innerHTML = localStorage.getItem("todo-tasks");
    doingTaskArea.innerHTML = localStorage.getItem("doing-tasks");
}

/* This function add a task in to-do area */
function addTodoTask() {
    
    let todoTask = document.getElementById("todo-task");
    let todoTaskArea = document.getElementsByClassName("tasks")[0];
    
    if (todoTask.value == "") {
        return;
    }

    todoTaskArea.innerHTML += '<div class="card todo-card"><div class="text">' + todoTask.value + '</div><button onclick="deleteTodoTask(this)" class="btn-delete"><img src="../assets/delete.png"></button></div>'

    todoTask.value = "";

    localStorage.setItem("todo-tasks", todoTaskArea.innerHTML);
}

/* This function add a task in doing area */
function addDoingTask() {
    
    let doingTask = document.getElementById("doing-task");
    let doingTaskArea = document.getElementsByClassName("tasks")[1];
    
    if (doingTask.value == "") {
        return;
    }

    doingTaskArea.innerHTML += '<div class="card doing-card"><div class="text">' + doingTask.value + '</div><button onclick="deleteDoingTask(this)" class="btn-delete"><img src="../assets/delete.png"></button></div>'

    doingTask.value = "";

    localStorage.setItem("doing-tasks", doingTaskArea.innerHTML);
}

/* This function remove a to-do task */
function deleteTodoTask(element) {
    let card = element.parentElement.parentElement.innerHTML;
    let oldContent = localStorage.getItem("todo-tasks");
    let newContent = oldContent.replace(card, "");
    localStorage.setItem("todo-tasks", newContent);
    element.parentElement.remove();
}

/* This function remove a doing task */
function deleteDoingTask(element) {
    let card = element.parentElement.parentElement.innerHTML;
    let oldContent = localStorage.getItem("doing-tasks");
    let newContent = oldContent.replace(card, "");
    localStorage.setItem("doing-tasks", newContent);
    element.parentElement.remove();
}


