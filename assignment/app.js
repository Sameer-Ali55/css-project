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
function showStatus(message) {
  statusMsg.textContent = message;
  clearTimeout(timer);
  timer = setTimeout(function () {
    statusMsg.textContent = "";
  }, 2000);
}

let taskId = 0;
function updateStats() {
  let total = taskList.children.length;
  let completed = taskList.querySelectorAll(".completed").length;
  let remaining = total - completed;
  stats.textContent = "Tasks: " + total +
    " | Done: " + completed +
    " | Remaining: " + remaining;
  console.log(taskList.parentElement);
  console.log(taskList.firstElementChild);
  console.log(taskList.lastElementChild);
  if (taskList.firstElementChild != null) {
    console.log(taskList.firstElementChild.nextElementSibling);
  }
}

function addTask() {
  let text = taskInput.value;
  if (text.trim() === "") {
    return;
  }
  let li = document.createElement("li");
  li.textContent = text;
  li.classList.add("task");

  taskId = taskId + 1;
  li.setAttribute("data-id", taskId);
  let doneButton = document.createElement("button");
  doneButton.textContent = "Done";
  doneButton.classList.add("done-btn");
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.classList.add("delete-btn");

  li.appendChild(doneButton);
  li.appendChild(deleteButton);

  taskList.appendChild(li);

  taskInput.value = "";

  updateStats();

  showStatus("Item added successfully!");
}

function addUrgentTask() {
  let text = taskInput.value;
  if (text.trim() === "") {
    return;
  }

  let li = document.createElement("li");
  li.textContent = text;
  li.classList.add("task");
  taskId = taskId + 1;
  li.setAttribute("data-id", taskId);

  let doneButton = document.createElement("button");
  doneButton.textContent = "Done";
  doneButton.classList.add("done-btn");

  let deleteButton = document.createElement("button");

  deleteButton.textContent = "X";
  deleteButton.classList.add("delete-btn");

  li.appendChild(doneButton);
  li.appendChild(deleteButton);

  taskList.prepend(li);

  taskInput.value = "";

  updateStats();

  showStatus("Item added successfully!");
}

addTaskBtn.addEventListener("click", addTask);

urgentBtn.addEventListener("click", addUrgentTask);

taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

taskList.addEventListener("click", function (event) {

  if (event.target.classList.contains("delete-btn")) {
    let li = event.target.closest("li");
    li.remove();
    updateStats();
    showStatus("Item removed successfully");
  }

  if (event.target.classList.contains("done-btn")) {
    let li = event.target.closest("li");
    li.classList("completed");
    if (li.classList("completed")) {
      event.target.textContent = "Undo";
    } else {
      event.target.textContent = "Done";
    }
    updateStats();
  }
});