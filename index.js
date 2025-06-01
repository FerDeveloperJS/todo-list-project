const addTaskButton = document.querySelector(".add-task-button")
addTaskButton.addEventListener("click", () => {

    const inputAddTask = document.querySelector(".input-add-task")

    if (inputAddTask.value === "") return

    const taskComponentDiv = document.createElement("div")
    taskComponentDiv.classList.add("task-component")

    const checkTaskButton = document.createElement("button")
    checkTaskButton.classList.add("check-task-button")

    const taskDescriptionParagraph = document.createElement("p")
    taskDescriptionParagraph.classList.add("task-description")
    taskDescriptionParagraph.innerText = inputAddTask.value

    const deleteTaskButton = document.createElement("button")
    deleteTaskButton.classList.add("delete-task-button")
    deleteTaskButton.innerText = "❌"

    taskComponentDiv.appendChild(checkTaskButton)
    taskComponentDiv.appendChild(taskDescriptionParagraph)
    taskComponentDiv.appendChild(deleteTaskButton)

    const taskContainer = document.querySelector(".task-container")

    taskContainer.appendChild(taskComponentDiv)

    inputAddTask.value = ""
    
})