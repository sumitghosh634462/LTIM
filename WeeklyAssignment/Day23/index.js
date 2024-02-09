function addTask() {
    const taskInput = document.getElementById('task');
    const taskValue = taskInput.value.trim();
    const taskDisplay = document.getElementById('taskDisplay');
    if (taskValue !== '') {
        // Create a new paragraph element
        const taskParagraph = document.createElement('p');
        taskParagraph.innerText = taskValue;
        // Append the paragraph to the task display area
        taskDisplay.appendChild(taskParagraph);
        // Clear the task input after adding task
        taskInput.value = '';
    } else {
        alert('Please enter a task.');
    }
}
