const inputTodo = document.getElementById("input-todo")
const addTodo = document.getElementById("add-todo")
const todoContainer = document.querySelector(".container")
const completedlist = []
const already = document.getElementById("checkbox")
const alreadylist = document.getElementById("alreadylist")

addTodo.addEventListener("click", () => {
    if (inputTodo.value != "") {
        displayTodo()
        inputTodo.value = ""
    } else {
        alert("input value is null")
    }
})

function displayTodo() {
    let todo = document.createElement("div")
    todo.classList.add("todo")

    let todoText = document.createElement("p")
    todoText.innerText = inputTodo.value

    let todoActions = document.createElement("div")
    todoActions.classList.add("actions")

    let checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox")
    checkbox.setAttribute("id", "checkbox")
    let delBtn = document.createElement("button")
    delBtn.innerText = "Delete"

    delBtn.addEventListener("click", () => {
        todoContainer.removeChild(todo)
    })


    checkbox.addEventListener("click",function(){
        if(this.checked) {
            const thisTodoText = todoText.innerText
            completedlist.push(thisTodoText)
            alreadylist.innerText = completedlist.join(',')
        }
    })

    todoActions.appendChild(checkbox)
    todoActions.appendChild(delBtn)

    todo.appendChild(todoText)
    todo.appendChild(todoActions)
    todoContainer.appendChild(todo)
}

