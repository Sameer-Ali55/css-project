// let heading = document.getElementById("title");
// heading.textContent = "Hello Sameer";

// let paragraph = document.getElementById("message");
// paragraph.textContent = "Hello DOM";

// let heading = document.getElementById("title");
// heading.textContent = "DOM Manipulation";

// let paragraph = document.getElementById("message");
// paragraph.textContent = "I AM LEARNING DOM";

// let button = document.getElementById("btn");
// console.log(button);

// let heading = document.querySelectorAll(".title");
// heading.forEach(function(heading) {
//     heading.textContent = "DOM";
// });

// let btn = document.getElementById("btn");
// btn.addEventListener("click", () => {
//     console.log("sameer");
// });

// btn.addEventListener("click", () => {
//     console.log("sameer");
// });

// let heading = document.createElement("h2");
// heading.textContent = "Section";
// document.body.appendChild(heading);

// document.querySelector("#task-list").addEventListener("click", () => {
//   console.log("task-list heard a click!");
// });

// document.querySelector("task-list").addEventListener("click", () => {
//     console.log("task");
// });

// const deleteButtons = document.querySelectorAll(".delete-btn");
// deleteButtons.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     btn.closest(".task").remove();
//   });
// });

// const taskList = document.getElementById("task-list");
// taskList.addEventListener("click", (event) => {
//   console.log("Something inside task-list was clicked");
//   console.log(event.target);
// });

// const taskList = document.getElementById("task-list");
// taskList.addEventListener("click", function(event) {
//   console.log("Task list");
// });
// document.addEventListener("click", function(event) {
//   console.log("Document");
// });

// const taskList = document.getElementById("task-list");
// taskList.addEventListener("click", function(event) {
//   console.log(event.target, event.target);
// });

// const form = document.getElementById("signup-form");
// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   console.log("Form submitted!");
// });

// const form = document.getElementById("signup-form");
// form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     const username = document.querySelector('input[name="username"]').value;
//     const email = document.querySelector('input[name="email"]').value;
//     console.log(username, email);
// });

// const form = document.getElementById("task-form");
// form.addEventListener("submit", function() {
//     event.preventDefault();
//     const taskInput = document.getElementById("task-input");
//     console.log(taskInput.value);
// });

////////////////////////////////////////////////////////
//DOM HTML Forms Task

// const form = document.getElementById("task-form");
// form.addEventListener("submit", function () {
//     console.log("submitted");
// });

// const form = document.getElementById("task-form");
// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     console.log("submitted");
// });

// const form = document.getElementById("task-form");
// const input = document.getElementById("task-input");
// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     console.log(input.value);
// });

// localStorage.setItem("age", 25);
// console.log(localStorage.getItem("age"));

// let age = Number(localStorage.getItem("age"));
// console.log(age);

// let tasks = ["Buy groceries", "Walk the dog"];
// console.log(tasks);
// console.log(typeof localStorage.getItem("tasks"));
// localStorage.setItem("tasks", tasks);
// console.log(localStorage.getItem("tasks"));

// let tasks = ["Buy groceries", "Walk the dog", "Finish homework"];
// localStorage.setItem("tasks", JSON.stringify(tasks));
// console.log(typeof localStorage.getItem("tasks"));

// let savedTasks = JSON.parse(localStorage.getItem("tasks"));
// console.log(savedTasks);
// console.log(typeof savedTasks)
// console.log(Array.isArray(savedTasks));

// function addTask(taskText) {
// let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
// tasks.push(taskText);
// localStorage.setItem("tasks", JSON.stringify(tasks));
// }
// addTask("Buy groceries");

// localStorage.setItem("luckyNumber", 42);
// let luckyNumber = localStorage.getItem("luckyNumber");
// console.log(luckyNumber);
// console.log(typeof luckyNumber);
// luckyNumber = Number(luckyNumber);
// console.log(typeof luckyNumber);

// localStorage.setItem("myName", "Sameer");
// let name = localStorage.getItem("myName");
// console.log(name);

// let form = { step: 2, name: "Ali" };
// sessionStorage.setItem("checkout", JSON.stringify(form));

// let saved = JSON.parse(sessionStorage.getItem("checkout"));
// console.log(saved.step);

// let form = document.getElementById("registration-form");
// form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;
//     sessionStorage.setItem("name", name);
//     sessionStorage.setItem("email", email);
//     sessionStorage.setItem("password", password);
//     console.log("Name:", sessionStorage.getItem("name"));
//     console.log("Email:", sessionStorage.getItem("email"));
//     console.log("Password:", sessionStorage.getItem("password"));
// });

let form = document.getElementById("registration-form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let user = {
        name: name,
        email: email,
        password: password,
    };

    sessionStorage.setItem("user", JSON.stringify(user));
    let storedUser = JSON.parse(sessionStorage.getItem("user"));

    console.log("Name", storedUser.name);
    console.log("Email", storedUser.email);
    console.log("Password", storedUser.password);
});


document.cookie = "username=Sameer";
console.log(document.cookie);
document.cookie = "username=Sameer";
document.cookie = "city=Rawalpindi";
console.log(document.cookie);
document.cookie = "city=Rawalpindi; max-age=3600";
document.cookie = "city=Rawalpindi; max-age=0";
document.cookie = "theme=dark; max-age=2592000";
console.log(document.cookie);
//..............................................
// localStorage — survives everything until removed
// localStorage.setItem("key", "value");
// localStorage.getItem("key");
// localStorage.removeItem("key");
// localStorage.clear();

localStorage.setItem("name", "Ali");
// console.log(localStorage.setItem("name"));
let name = localStorage.getItem("name");
console.log(name);
// localStorage.removeItem("name");
localStorage.clear();
//...................................................
// sessionStorage — identical, but dies with the tab
// sessionStorage.setItem("key", "value");
// sessionStorage.getItem("key");
// sessionStorage.removeItem("key");
// sessionStorage.clear();

sessionStorage.setItem("name", "Ali");
let nam = sessionStorage.getItem("name");
console.log(name);
sessionStorage.removeItem("name");
sessionStorage.clear();
//.........................................................
document.cookie = "key=value; max-age=3600";  // set, 1 hour
document.cookie;                              // read ALL of them
document.cookie = "key=; max-age=0";          // delete

document.cookie = "course=mern stack; max-age=3600"; 
document.cookie = "course=developer; max-age=3600";
console.log(document.cookies);
document.cookie = "name=; max-age=0";


// setTimeout(() => {
//   console.log("This runs after 2 seconds");
// }, 2000);
// console.log("This runs immediately");
setTimeout(() => {
    console.log("runs after 1 second");
})
console.log("runs after 6 seconds");