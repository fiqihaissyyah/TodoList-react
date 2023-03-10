import React, { useState } from 'react'
import { FaPen, FaTrash } from "react-icons/fa";

const Item = ({todos, removeTodo, completeTodo}) => {
  return (
    <div className={todos.completed ? "todo-row complete" : "todo-row"}>
        {todos.title}
        <div className='icons'>
            <FaPen className='icon' onClick={() => completeTodo(todos.id)} />
            <FaTrash onClick={() => removeTodo(todos.id)} />
        </div>
    </div>
  )
}

export default Item