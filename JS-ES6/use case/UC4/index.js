// Model
class Todo {
    constructor(title, date) {
        Todo.nextId++;
        this.id = Todo.nextId; // auto_increment
        this.title = title;
        this.completed = false;
        this.date = date;
    }
}
Todo.nextId = 0;
// Service
class TodosService {
    constructor() {

    }
    // Used to add new todo
    addTodo(title) {
        let date = Utility.getCurrentDate();
        todos.push(new Todo(title, date));
    }

    // Used to edit any todo with id
    editTodo(id, newTitle) {
        todos.find(function (todo, index) {
            return todo.id === id
        }).title = newTitle;
    }

    // Used to mark the todo completed
    completeTodo(id) {
        todos.find(function (todo, index) {
            return todo.id === id
        }).completed = true;
    }

    // Used to mark all todos completed
    completeAll() {
        todos.forEach(function (todo, index) {
            todo.completed = true;
        })
    }

    // Used to delete the todo with id
    deleteTodo(id) {
        todos.map(function (todo, index) {
            if (todo.id === id) {
                return;
            }
            return todo;
        })
    }

    // Used to mark uncompleted 
    clearCompleted() {
        todos.find(function (todo, index) {
            return todo.id === id
        }).completed = false;
    }

    // used to view depends filter i.e completed or not 
    viewTodos(filter) {
        let completed = filter === 'completed' ? true : false;
        todos.forEach(function (todo, index) {
            if (filter && todo.completed == completed)
                console.log(todo);
        })
    }
}
// Method to get date in dd/mm/yyyy format

class Utility {
    static getCurrentDate() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        today = dd + '/' + mm + '/' + yyyy;
        return today;
    }
}

const service = new TodosService();
let todos = [];

