const $toDoForm = document.getElementById("todo-form");
const $toDoList = document.getElementById("todo-list");
const $toDoInput = $toDoForm.querySelector("input");
let toDos = [];
const TODOS_KEY = "todos"
const savedToDos = localStorage.getItem(TODOS_KEY);

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}

const deleteToDo = (e) => {
	const li = e.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id != Number(li.id));
    saveToDos();
}

const paintTodo = (e) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    
    span.innerText = e.text;
    li.id = e.id;
    const button = document.createElement("button");
    button.innerText = "✓";
    li.appendChild(button);
    li.appendChild(span);
    $toDoList.appendChild(li);
    button.addEventListener("click", deleteToDo);
}

function handleTodoSubmit(event){
	event.preventDefault();
    const newTodo = $toDoInput.value;
    const newTodoObj = {text : newTodo, id : Date.now()};
    $toDoInput.value="";
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}

$toDoForm.addEventListener("submit", handleTodoSubmit);

if(savedToDos!== null){
	const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}