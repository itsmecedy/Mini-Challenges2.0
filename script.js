const add = document.getElementById("addBtn");
const input = document.getElementById("inputField");
const container = document.getElementById("taskContainer");
// const completed = document.getElementById("completed");

add.addEventListener("click", () => {
  if (input.value !== "") {
    var task = document.createElement("div");
    task.classList.add("task");
    task.innerHTML = `<input type="checkbox" id="checkbox" />${input.value}`;
    container.appendChild(task);
    input.value = "";
  } else {
    alert("Please input new task");
  }
});
