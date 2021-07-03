var btnToDo = document.getElementById("btn-todo");
var btnDoing = document.getElementById("btn-doing");

var todoTasks = [];
var doingTasks = [];

btnToDo.addEventListener("click", addTodoTask);
btnDoing.addEventListener("click", addDoingTask);

onload = function () {

    let savedTodoTasks = JSON.parse(localStorage.getItem("todoTasks"));
    let savedDoingTasks = JSON.parse(localStorage.getItem("doingTasks"));

    for (let i in savedTodoTasks) {
        todoTasks.push(savedTodoTasks[i]);
    }

    for (let i in savedDoingTasks) {
        doingTasks.push(savedDoingTasks[i]);
    }

    let todoTaskArea = document.getElementsByClassName("tasks")[0]
    let doingTaskArea = document.getElementsByClassName("tasks")[1]

    for (let i of todoTasks) {
        todoTaskArea.innerHTML += '<div class="card todo-card"><div class="text">' + i + '</div><button onclick="deleteTodoTask(this)" class="btn-delete"><img src="./assets/delete.png"></button></div>';
    }

    for (let i of doingTasks) {
        doingTaskArea.innerHTML += '<div class="card doing-card"><div class="text">' + i + '</div><button onclick="deleteDoingTask(this)" class="btn-delete"><img src="./assets/delete.png"></button></div>';
    }
}

/* This function adds a task in to-do area */
function addTodoTask() {
    let todoTask = document.getElementById("todo-task");
    let todoArea = document.getElementsByClassName("tasks")[0]

    if(todoTask.value == "") {
        return;
    }

    todoTasks.push(todoTask.value);

    todoArea.innerHTML += '<div class="card todo-card"><div class="text">' + todoTask.value + '</div><button onclick="deleteTodoTask(this)" class="btn-delete"><img src="./assets/delete.png"></button></div>'

    localStorage.setItem("todoTasks", JSON.stringify(todoTasks));

    todoTask.value = "";
}

/* This function adds a task in doing area */
function addDoingTask() {
    let doingTask = document.getElementById("doing-task");
    let doingArea = document.getElementsByClassName("tasks")[1]

    if (doingTask.value == "") {
        return;
    }

    doingTasks.push(doingTask.value);

    doingArea.innerHTML += '<div class="card doing-card"><div class="text">' + doingTask.value + '</div><button onclick="deleteDoingTask(this)" class="btn-delete"><img src="./assets/delete.png"></button></div>'

    localStorage.setItem("doingTasks", JSON.stringify(doingTasks));

    doingTask.value = "";
}

/* This function removes a to-do task */
function deleteTodoTask(element) {
    let card = element.parentElement.innerText;
    element.parentElement.remove();
    
    for(var i in todoTasks) {
        if (todoTasks[i] == card) {
            todoTasks.splice(i, 1);
        }
    }

    localStorage.setItem("todoTasks", JSON.stringify(todoTasks));
} 

/* This function removes a doing task */
function deleteDoingTask(element) {
    let card = element.parentElement.innerText;
    element.parentElement.remove();
    
    for(var i in doingTasks) {
        if (doingTasks[i] == card) {
            doingTasks.splice(i, 1);
        }
    }

    localStorage.setItem("doingTasks", JSON.stringify(doingTasks));
}

