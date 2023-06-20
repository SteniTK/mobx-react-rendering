import React from "react"
import { observer } from "mobx-react"
import TodoItem from './TodoItem';


const TodoList = observer(({ store }) => {

  const { clearComplete, searchQuery, filteredTodos, todos, markComplete } = store

  const createNew = () => (e) => {
    if (e.which === 13) {
      store.createTodo(e.target.value)
      e.target.value = ""
    }
  }

  const filter = () => (e) => {
    store.searchQuery = e.target.value
  }

  const todoLis = filteredTodos.map(todo => (
    <TodoItem {...todo} markComplete={markComplete}/>
    // <TodoItem todo={todo} markComplete={markComplete}/>
  ))
  return <div>
    <h1>todos</h1>
    <input className="new" onKeyPress={createNew()} placeholder="enter new todo"/>
    <input className="filter" value={searchQuery} onChange={filter()} placeholder="search todos"/>
    <ul>{todoLis}</ul>
    <a href="#" onClick={clearComplete}>Clear Complete</a>
  </div>
});

export default TodoList;
