const taskName = document.getElementById("taskName");
const taskDescription = document.getElementById("taskDescription");
const container = document.getElementById("taskContainer");

var dropdownBtn = document.querySelector(".themeButton");
var dropdownContent = document.getElementById("dropdown-content");
var themeIcon = document.getElementById("themeIcon");

localStorage.setItem("currTheme", 1);

function addTask() {
  if (taskName.value === "" || taskDescription.value === "") {
    alert("Empty Fields enter something");
  } else {
    let myDiv = document.createElement("div");
    myDiv.className = "taskList";

    let innerDiv = document.createElement("div");
    innerDiv.className = "parag";

    let taskTitle = document.createElement("h2");
    taskTitle.textContent = taskName.value;

    let mySpan = document.createElement("span");
    mySpan.textContent = taskDescription.value;

    let complete = document.createElement("button");
    complete.className = "completed";
    complete.textContent = "Completed";

    let dele = document.createElement("button");
    dele.className = "delete";
    dele.textContent = "Delete";

    complete.addEventListener("click", function () {
      completeButton(myDiv, taskTitle, mySpan, complete);
    });
    dele.addEventListener("click", function () {
      deleteButton(myDiv);
    });

    innerDiv.append(taskTitle);
    innerDiv.append(mySpan);

    myDiv.append(innerDiv);
    myDiv.append(complete);
    myDiv.append(dele);

    container.append(myDiv);

    // Clear input fields
    taskName.value = "";
    taskDescription.value = "";
    saveData();
  }
}

function deleteButton(myDiv) {
  container.removeChild(myDiv);
  saveData();
}

function completeButton(myDiv, taskTitle, mySpan, complete) {
  mySpan.style.textDecoration = "line-through";
  taskTitle.style.textDecoration = "line-through";
  myDiv.removeChild(complete);
  saveData();
}

function saveData() {
  localStorage.setItem("myList", container.innerHTML);
}

function showData() {
  container.innerHTML = localStorage.getItem("myList") || "";
  attachEventListeners();
}

function attachEventListeners() {
  const tasks = container.querySelectorAll(".taskList");
  tasks.forEach((task) => {
    const complete = task.querySelector(".completed");
    const dele = task.querySelector(".delete");
    const taskTitle = task.querySelector("h2");
    const mySpan = task.querySelector("span");

    if (complete) {
      complete.addEventListener("click", function () {
        completeButton(task, taskTitle, mySpan, complete);
      });
    }

    if (dele) {
      dele.addEventListener("click", function () {
        deleteButton(task);
      });
    }
  });
}

showData();

var parag = document.getElementsById("parag");

function changeToBlue() {
  const root = document.documentElement;
  root.classList.toggle("light-blue"); // Toggle the 'light-blue' class on the :root element
  document.body.style.animation = "AnimationName 59s ease infinite;";
  document.getElementById("themeIcon").style.filter =
    "hue-rotate(180deg) brightness(1.2)";
}

function change() {
  if (localStorage.getItem("currTheme")) {
    console.log("its orange");
    changeToBlue();
  } else {
    changeToOrange();
  }
}
