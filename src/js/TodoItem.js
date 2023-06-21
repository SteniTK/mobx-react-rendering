import React from "react"
import { observer } from "mobx-react"

const TodoItem = observer(({
  todo,
  markComplete}) => {
  const {
    id,
    value,
    complete,
  } = todo;
  return (
    <li>
      <input type="checkbox" onChange={() => markComplete(id)} value={complete} checked={complete} />
      <span>{value}</span>
    </li>)
});

export default TodoItem;