const taskName = document.getElementById("taskName");
const taskDescription = document.getElementById("taskDescription");
const container = document.getElementById("taskContainer");

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
    complete.textContent = "Completed"; // Add button text

    let dele = document.createElement("button");
    dele.className = "delete";
    dele.textContent = "Delete"; // Add button text

    complete.addEventListener("click", function () {
      mySpan.style.textDecoration = "line-through";
      taskTitle.style.textDecoration = "line-through";
      myDiv.removeChild(complete);
      saveData();
    });

    dele.addEventListener("click", function () {
      container.removeChild(myDiv);
      saveData();
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

function saveData() {
  localStorage.setItem("myList", container.innerHTML);
}

function showData() {
  container.innerHTML = localStorage.getItem("myList");
}

showData();
