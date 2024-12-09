// Add task function
function addTask() {
    let input = document.getElementById("todo-input");
    let taskText = input.value.trim();

    if (taskText !== "") {
        let taskList = document.getElementById("todo-list");

        // Create list item
        let li = document.createElement("li");

        // Add task text
        li.innerHTML = taskText + 
            '<button class="delete-btn" onclick="deleteTask(this)">Delete</button>';

        // Mark task as complete when clicked
        li.addEventListener("click", function() {
            li.classList.toggle("completed");
        });

        // Append task to list
        taskList.appendChild(li);

        // Clear input field
        input.value = "";
    }
}

// Delete task function
function deleteTask(button) {
    let li = button.parentElement;
    li.remove();
}
