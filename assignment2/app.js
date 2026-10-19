
// const taskInput = document.getElementById("task-input");
// const addTaskBtn = document.getElementById("add-task-btn");
// const taskList = document.getElementById("task-list");

// const heading = document.querySelector("#main-heading");
// const stats = document.getElementById("stats");
// const urgentBtn = document.getElementById("urgent-task-btn");
// const todoApp = document.getElementById("todo-app");

// heading.textContent = "My Task List";

// stats.innerHTML = "<strong>Tasks: 0</strong>";
// stats.style.backgroundColor = "lightyellow";
// stats.style.padding = "10px";

// const statusMsg = document.createElement("div");
// statusMsg.id = "status-msg";
// todoApp.insertBefore(statusMsg, taskList);

// let timer;

// function showStatus(message) {
//   statusMsg.textContent = message;
//   clearTimeout(timer);

//   timer = setTimeout(function () {
//     statusMsg.textContent = "";
//   }, 2000);
// }

// let taskId = 0;

// function updateStats() {
//   let total = taskList.children.length;
//   let completed = taskList.querySelectorAll(".completed").length;
//   let remaining = total - completed;

//   stats.textContent = "Tasks: " + total +
//     " | Done: " + completed +
//     " | Remaining: " + remaining;

//   console.log(taskList.parentElement);
//   console.log(taskList.firstElementChild);
//   console.log(taskList.lastElementChild);

//   if (taskList.firstElementChild != null) {
//     console.log(taskList.firstElementChild.nextElementSibling);
//   }
// }

// // LOCAL STORAG
// function saveTasks() {
//   let tasks = [];

//   for (let i = 0; i < taskList.children.length; i++) {
//     let li = taskList.children[i];

//     let task = {
//       id: li.getAttribute("data-id"),
//       text: li.querySelector(".task-text").textContent,
//       completed: li.classList.contains("completed")
//     };

//     tasks.push(task);
//   }

//   localStorage.setItem("tasks", JSON.stringify(tasks));
// }

// // LOCAL STORAGE: Load tasks
// function loadTasks() {
//   let savedTasks = localStorage.getItem("tasks");

//   if (savedTasks !== null) {
//     let tasks = JSON.parse(savedTasks);

//     for (let i = 0; i < tasks.length; i++) {
//       let li = document.createElement("li");
//       li.classList.add("task");

//       li.setAttribute("data-id", tasks[i].id);

//       let taskText = document.createElement("span");
//       taskText.classList.add("task-text");
//       taskText.textContent = tasks[i].text;

//       li.appendChild(taskText);

//       let doneButton = document.createElement("button");

//       if (tasks[i].completed === true) {
//         doneButton.textContent = "Undo";
//         li.classList.add("completed");
//       } else {
//         doneButton.textContent = "Done";
//       }

//       doneButton.classList.add("done-btn");

//       let deleteButton = document.createElement("button");
//       deleteButton.textContent = "X";
//       deleteButton.classList.add("delete-btn");

//       li.appendChild(doneButton);
//       li.appendChild(deleteButton);

//       taskList.appendChild(li);

//       if (Number(tasks[i].id) > taskId) {
//         taskId = Number(tasks[i].id);
//       }
//     }
//   }

//   updateStats();
// }

// function addTask() {
//   let text = taskInput.value;

//   if (text.trim() === "") {
//     return;
//   }

//   let li = document.createElement("li");
//   li.classList.add("task");

//   taskId = taskId + 1;
//   li.setAttribute("data-id", taskId);

//   let taskText = document.createElement("span");
//   taskText.classList.add("task-text");
//   taskText.textContent = text;

//   li.appendChild(taskText);

//   let doneButton = document.createElement("button");
//   doneButton.textContent = "Done";
//   doneButton.classList.add("done-btn");

//   let deleteButton = document.createElement("button");
//   deleteButton.textContent = "X";
//   deleteButton.classList.add("delete-btn");

//   li.appendChild(doneButton);
//   li.appendChild(deleteButton);

//   taskList.appendChild(li);

//   taskInput.value = "";

//   updateStats();
//   saveTasks();

//   showStatus("Item added successfully!");
// }

// function addUrgentTask() {
//   let text = taskInput.value;

//   if (text.trim() === "") {
//     return;
//   }

//   let li = document.createElement("li");
//   li.classList.add("task");

//   taskId = taskId + 1;
//   li.setAttribute("data-id", taskId);

//   let taskText = document.createElement("span");
//   taskText.classList.add("task-text");
//   taskText.textContent = text;

//   li.appendChild(taskText);

//   let doneButton = document.createElement("button");
//   doneButton.textContent = "Done";
//   doneButton.classList.add("done-btn");

//   let deleteButton = document.createElement("button");
//   deleteButton.textContent = "X";
//   deleteButton.classList.add("delete-btn");

//   li.appendChild(doneButton);
//   li.appendChild(deleteButton);

//   taskList.prepend(li);

//   taskInput.value = "";

//   updateStats();
//   saveTasks();

//   showStatus("Item added successfully!");
// }

// addTaskBtn.addEventListener("click", addTask);

// urgentBtn.addEventListener("click", addUrgentTask);

// taskInput.addEventListener("keydown", function (event) {
//   if (event.key === "Enter") {
//     addTask();
//   }
// });

// taskList.addEventListener("click", function (event) {
//   if (event.target.classList.contains("delete-btn")) {
//     let li = event.target.closest("li");

//     li.remove();

//     updateStats();
//     saveTasks();

//     showStatus("Item removed successfully");
//   }

//   if (event.target.classList.contains("done-btn")) {
//     let li = event.target.closest("li");

//     li.classList.toggle("completed");

//     if (li.classList.contains("completed")) {
//       event.target.textContent = "Undo";
//     } else {
//       event.target.textContent = "Done";
//     }

//     updateStats();
//     saveTasks();
//   }
// });

// // Load saved tasks when the page opens
// loadTasks();





const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

const heading = document.querySelector("#main-heading");
const stats = document.getElementById("stats");
const urgentBtn = document.getElementById("urgent-task-btn");
const todoApp = document.getElementById("todo-app");

heading.textContent = "My Task List";

stats.innerHTML = "<strong>Tasks: 0</strong>";
stats.style.backgroundColor = "lightyellow";
stats.style.padding = "10px";

const statusMsg = document.createElement("div");
statusMsg.id = "status-msg";
todoApp.insertBefore(statusMsg, taskList);

let timer;
let taskId = 0;

function showStatus(message) {
  statusMsg.textContent = message;

  clearTimeout(timer);

  timer = setTimeout(function () {
    statusMsg.textContent = "";
  }, 2000);
}

function updateStats() {
  let total = taskList.children.length;
  let completed = taskList.querySelectorAll(".completed").length;
  let remaining = total - completed;

  stats.textContent = "Tasks: " + total +
    " | Done: " + completed +
    " | Remaining: " + remaining;
}

// Save tasks in Local Storage
function saveTasks() {
  let tasks = [];

  for (let i = 0; i < taskList.children.length; i++) {
    let li = taskList.children[i];

    let task = {
      id: li.getAttribute("data-id"),
      text: li.querySelector(".task-text").textContent,
      completed: li.classList.contains("completed")
    };

    tasks.push(task);
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Create a task on the screen
function createTask(text, id, completed, urgent) {
  let li = document.createElement("li");
  li.classList.add("task");

  li.setAttribute("data-id", id);

  let taskText = document.createElement("span");
  taskText.classList.add("task-text");
  taskText.textContent = text;

  li.appendChild(taskText);

  let doneButton = document.createElement("button");

  if (completed === true) {
    doneButton.textContent = "Undo";
    li.classList.add("completed");
  } else {
    doneButton.textContent = "Done";
  }

  doneButton.classList.add("done-btn");

  let deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.classList.add("delete-btn");

  li.appendChild(doneButton);
  li.appendChild(deleteButton);

  if (urgent === true) {
    taskList.prepend(li);
  } else {
    taskList.appendChild(li);
  }
}

// Load tasks from Local Storage
function loadTasks() {
  let savedTasks = localStorage.getItem("tasks");

  if (savedTasks !== null) {
    let tasks = JSON.parse(savedTasks);

    for (let i = 0; i < tasks.length; i++) {
      createTask(
        tasks[i].text,
        tasks[i].id,
        tasks[i].completed,
        false
      );

      if (Number(tasks[i].id) > taskId) {
        taskId = Number(tasks[i].id);
      }
    }
  }

  updateStats();
}

// Add normal task
function addTask() {
  let text = taskInput.value.trim();

  if (text === "") {
    showStatus("Please enter a task!");
    return;
  }

  taskId = taskId + 1;

  createTask(text, taskId, false, false);

  taskInput.value = "";

  updateStats();
  saveTasks();

  showStatus("Item added successfully!");
}

// Add urgent task
function addUrgentTask() {
  let text = taskInput.value.trim();

  if (text === "") {
    showStatus("Please enter a task!");
    return;
  }

  taskId = taskId + 1;

  createTask(text, taskId, false, true);

  taskInput.value = "";

  updateStats();
  saveTasks();

  showStatus("Urgent task added!");
}

addTaskBtn.addEventListener("click", addTask);

// Check if urgent button exists
if (urgentBtn !== null) {
  urgentBtn.addEventListener("click", addUrgentTask);
}

taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addTask();
  }
});

// Delete and Done buttons
taskList.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    let li = event.target.closest("li");

    li.remove();

    updateStats();
    saveTasks();

    showStatus("Item removed successfully!");
  }

  if (event.target.classList.contains("done-btn")) {
    let li = event.target.closest("li");

    li.classList.toggle("completed");

    if (li.classList.contains("completed")) {
      event.target.textContent = "Undo";
    } else {
      event.target.textContent = "Done";
    }

    updateStats();
    saveTasks();
  }
});

// Load saved tasks when page opens
loadTasks();
console.log("JavaScript is working!");
console.log("Add button:", addTaskBtn);
console.log("Task list:", taskList);
console.log("Saved tasks:", localStorage.getItem("tasks"));