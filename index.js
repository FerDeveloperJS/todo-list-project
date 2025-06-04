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

    const modifyTaskButton = document.createElement("button")
    modifyTaskButton.classList.add("modify-task-button")
    modifyTaskButton.innerText = "✏️"

    taskComponentDiv.appendChild(checkTaskButton)
    taskComponentDiv.appendChild(taskDescriptionParagraph)
    taskComponentDiv.appendChild(deleteTaskButton)
    taskComponentDiv.appendChild(modifyTaskButton)

    const taskContainer = document.querySelector(".task-container")

    taskContainer.appendChild(taskComponentDiv)

    inputAddTask.value = ""
    
})


const taskContainer = document.querySelector(".task-container")
taskContainer.addEventListener("click", (event) => {

  if (event.target.classList.contains("check-task-button")) {

    const taskComponent = event.target.parentElement
    const taskDescriptionParagraph = event.target.nextElementSibling
    
    if (taskComponent.classList.contains("task-checked")) {

        taskDescriptionParagraph.style.color = "black"
        taskDescriptionParagraph.style.textDecoration = "none"
        event.target.innerText = ""

        taskComponent.classList.remove("task-checked")
        
    } else {
        taskDescriptionParagraph.style.color = "grey"
        taskDescriptionParagraph.style.textDecoration = "line-through"
        event.target.innerText = "✔️"

        taskComponent.classList.add("task-checked")
    }

  }


  if (event.target.classList.contains("delete-task-button")) {

    const taskComponent = event.target.parentElement

    taskContainer.removeChild(taskComponent)

  }


  if (event.target.classList.contains("modify-task-button")) {

    const popUpOverlay = document.querySelector(".pop-up-overlay")
    popUpOverlay.style.display = "flex"

    const confirmModifyTaskButton = document.querySelector(".confirm-modify-task-button")
    const taskComponent = event.target.parentElement
    const taskDescriptionParagraph = taskComponent.querySelector(".task-description")
    
    confirmModifyTaskButton.addEventListener("click", () => {

      const inputModifyTask = document.querySelector(".input-modify-task")
      taskDescriptionParagraph.innerText = inputModifyTask.value

      popUpOverlay.style.display = "none"

      inputModifyTask.value = ""

    })
  }

})


const doNotConfirmModifyTaskButton = document.querySelector(".do-not-confirm-modify-task-button")
doNotConfirmModifyTaskButton.addEventListener("click", () => {

  const popUpOverlay = document.querySelector(".pop-up-overlay")

  popUpOverlay.style.display = "none"

  const inputModifyTask = document.querySelector(".input-modify-task")

  inputModifyTask.value = "" 
})