// Get references to the input field, add button, and task list
const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

// Function to enable/disable the add button based on input
todoInput.addEventListener("input", function () {
  if (todoInput.value.trim !== "") {
    addButton.disabled = false;
  } else {
    addButton.disabled = true;
  }
});
addButton.addEventListener("click", function () {
  const li = document.createElement("li");
  // Create an h2 element for the task text
  const h2 = document.createElement("h2");
  h2.textContent = todoInput.value;
  // Create the delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X"; // Set the text for the delete button
  deleteButton.classList.add("delete-button"); // Add the delete button's class

  // Append the h2 and delete button to the list item
  li.appendChild(h2);
  li.appendChild(deleteButton);

  todoList.appendChild(li);
  todoInput.value = "";
  addButton.disabled = true;
  // Add functionality to cross out or uncross a task (strikethrough)
  h2.addEventListener("click", function () {
    h2.classList.toggle("completed"); // Toggle the completed class
  });

  // Delete button functionality to remove the task
  deleteButton.addEventListener("click", function () {
    todoList.removeChild(li); // Remove the li from the list
  });
});
