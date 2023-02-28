const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const taskInput = document.querySelector("#task");

loadEventListeners();
function loadEventListeners() {
  form.addEventListener("submit", addTodo);
  taskList.addEventListener("click", removeTodo);
  clearBtn.addEventListener("click", clearTodo);
  
}
function addTodo(e) {
  if (taskInput.value === " ") {
    alert("add a task");
  }
  e.preventDefault();
  //   create li
  const li = document.createElement("li");

  li.className = " collection-item list-group-item";
  //   append child
  li.appendChild(document.createTextNode(taskInput.value));

  //   create link element
  const link = document.createElement("a");
  link.className = " delete-item secondary-content";
  link.innerHTML =
    '<button type="button" class="delete close" data-dismiss="alert" >delete</button>';
  li.appendChild(link);

  //   append li to Ul
  taskList.appendChild(li);
  //   clear input
  taskInput.value = " ";
}


// remove todo
function removeTodo(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure")) {
      e.target.parentElement.parentElement.remove();
      console.log(e.target);
    }
  }
}
function clearTodo(e) {
  taskList.innerHTML = "";
}
