import { computed, observable } from "mobx"

class Todo {
  @observable value
  @observable id
  @observable complete

  constructor(value) {
    this.value = value
    this.id = Date.now()
    this.complete = false
  }
}

export class TodoStore {
  @observable todos = []
  @observable searchQuery = ""
  @computed get filteredTodos() {
    var matchesFilter = new RegExp(this.searchQuery, "i")
    return this.todos.filter(todo => !this.searchQuery || matchesFilter.test(todo.value))
  }

  createTodo(value) {
    this.todos.push(new Todo(value))
  }

  clearComplete = () => {
    const incompleteTodos = this.todos.filter(todo => !todo.complete)
    this.todos.replace(incompleteTodos)
  }

  markComplete = (id) => {
    const todo = this.todos.find((t) => t.id === id);
    todo.complete = !todo.complete;
  }
}

export default new TodoStore

