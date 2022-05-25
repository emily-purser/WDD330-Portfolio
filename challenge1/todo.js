import { readLS, writeLS } from "./ls.js";
import { qs, bindTouch } from "./utilities.js";

//List of Tasks
let todoList = [];

function saveTodo(task, key) {
    const newTodo = {
        id: new Date(),
        content: task,
        completed: false 
    };

    todoList.push(newTodo);
    writeLS(key, todoList);
}

function getTodos(key) {
    if(todoList === null) {
        todoList = readLS(key);
    }
    return todoList;
}

function renderTodoList(list, element, todos, hidden) {
    element.innerHTML = "";
    let tasksLeft = document.getElementById('tasksLeft');
    let count = 0;

    list.forEach(todo => {
        const task = document.createElement('li');
        const formatDate = new Date(todo.id).toLocaleDateString("en-US");
        let taskFooter = document.getElementById('listFooter');
        count ++;

        let cb = null;
        let button = null;

        if(hidden && todo.completed){
            task.innerHTML = `<input type="checkbox" checked><s>${todo.content}</s><input type="button" id="x" value="X">`;
        } else {
            task.innerHTML = `<input type="checkbox">${todo.content}<input type="button" id="x" value="X">`
        }

        cb = task.childNodes[0];
        console.log("i am the cb " + cb);

        if(cb) {
            cb.addEventListener("change", function() {
                todos.completeTodo(todo.id);
            });
        }
        button = task.childNodes[2];
        console.log("im am the button " + button);
        if(button) {
            console.log("I am in the if button statement");
            button.addEventListener("click", function() {
                console.log("I am in the event listener for button");
                todos.removeTodo(todo.id);
            });
        }
        element.appendChild(task);
    });
    tasksLeft.innerHTML=count + " tasks left";
}
function deleteTodo(key){
    console.log("Im in the deleteToDo statement");
    let newList = todoList.filter(item => item.id != key);
    todoList = newList;
    writeLS(key, todoList);
}

//Todo Class
export default class ToDo {
    constructor(key, listElement) {
        this.key = key;
        this.listElement = listElement;
        bindTouch('#addButton', this.addTodo.bind(this));
        this.listTodo();
    }
    addTodo(){
        const newTask = document.getElementById("newTask");
        saveTodo(newTask.value, this.key);
        console.log(newTask);
        newTask.value = "";
        this.listTodo();
    }
    listTodo(hidden=true){
        renderTodoList(getTodos(this.key), this.listElement, this, hidden);
    }
    findTodo(id) {
        let todo = todoList.find(element => {
            return element.id === id;
        });
        return todo;
    }
    completeTodo(id){
        console.log(id + "checked");
        let todo = this.findTodo(id);

        if(todo) {
            todo.completed = !todo.completed;
            writeLS(this.key, todoList);
            renderTodoList(todoList, this.listElement, this, true);
        }
    }
    removeTodo(id){
        let todo = this.findTodo(id);
        console.log(todo);
        if(todo){
            deleteTodo(id);
            console.log("I am after the delete todo statement");
            renderTodoList(todoList, this.listElement, this, true);
        }
    }
}