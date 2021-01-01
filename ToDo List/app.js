//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo')

//event listener
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo)

//functions
function addTodo(event){
    //prevent refresh
    event.preventDefault();
    //todo div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo');
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item')
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);
    //checkmark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton)
    //delete button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //append todo
    todoList.appendChild(todoDiv)
    //clear input
    todoInput.value = null

}

function deleteCheck(e) {
    const item = e.target;
    console.log(item.parentElement)
    if(item.classList[0]==='trash-btn'){
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
            todo.remove()
        })
    }
    if(item.classList[0]==='complete-btn'){
        const todo = item.parentElement;
        todo.classList.add('completed');
    }
}

function filterTodo(e) {
    const todosNodes = todoList.childNodes;
    const todos = Array.prototype.slice.call(todosNodes);
    todos.forEach(function(todo) {
      switch (e.target.value) {
        case "all":
          todo.style.display = "flex";
          break;
        case "completed":
          if (todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
        case "uncompleted":
          if (!todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
      }
    });
  }