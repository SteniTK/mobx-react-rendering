import React from "react"
import { observer } from "mobx-react"
import TodoItem from './TodoItem';


const TodoList = observer(({ store }) => {

  const { searchQuery, 
    clearComplete, filteredTodos, countComplete, allCount, markComplete 
  } = store

  const createNew = () => (e) => {
    if (e.which === 13) {
      store.createTodo(e.target.value)
      e.target.value = ""
    }
  }

  const filter = () => (e) => {
    store.searchQuery = e.target.value
  }
  const todoList = filteredTodos.map(todo => (
    // <TodoItem {...todo} key={todo.id} markComplete={markComplete}/>
    <TodoItem todo={todo} key={todo.id} markComplete={markComplete}/>
  ))
  return <div>
    <h1>todos</h1>
    <input className="new" onKeyPress={createNew()} placeholder="enter new todo"/>
    <input className="filter" value={searchQuery} onChange={filter()} placeholder="search todos"/>
    <ul>{todoList}</ul>
    <a href="#" onClick={clearComplete}>Clear Complete</a>
    <h4>
      <span>{countComplete} completed</span>
      <span> out of {allCount}</span>
    </h4>

    {/* <TodosView store={store} />
    <Actions store={store} /> */}
  </div>
});

const TodosView = observer(({ store }) => {
  const {filteredTodos, markComplete} = store;
  const todoList = filteredTodos.map(todo => (
    <TodoItem todo={todo} key={todo.id} markComplete={markComplete}/>
  ))
  return <div>
    <ul>{todoList}</ul>
    <TodoSummary store={store} />
  </div>;
})

const TodoSummary = observer(({store}) => {
  const { countComplete, allCount } = store;
  return <h4>
    <span>{countComplete} completed</span>
    <span> out of {allCount}</span>
  </h4>
})

const Actions = observer(({store}) => {
  const { clearComplete } = store;
  return <a href="#" onClick={clearComplete}>Clear Complete</a>
});

export default TodoList;
