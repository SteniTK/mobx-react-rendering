import React from "react"
import { observer } from "mobx-react"
import TodoItem from './TodoItem';


@observer
export default class TodoList extends React.Component {
  createNew(e) {
    if (e.which === 13) {
      this.props.store.createTodo(e.target.value)
      e.target.value = ""
    }
  }

  filter(e) {
    this.props.store.filter = e.target.value
  }

  toggleComplete(todo) {
    todo.complete = !todo.complete
  }

  render() {
    const { clearComplete, filter, filteredTodos, todos, markComplete } = this.props.store

    const todoLis = filteredTodos.map(todo => (
      <TodoItem {...todo} markComplete={markComplete}/>
      // <TodoItem todo={todo} markComplete={markComplete}/>
    ))
    return <div>
      <h1>todos</h1>
      <input className="new" onKeyPress={this.createNew.bind(this)} placeholder="enter new todo"/>
      <input className="filter" value={filter} onChange={this.filter.bind(this)} placeholder="search todos"/>
      <ul>{todoLis}</ul>
      <a href="#" onClick={clearComplete}>Clear Complete</a>
    </div>
  }
}
