import React, { useEffect, useRef, useState } from 'react'

const Form = (props) => {
    const [input, setInput] = useState("")

    const handleChange = e => {
        setInput( e.target.value);
    };

    const handleSubmit = e => {
      e.preventDefault();
      props.addTodo(input)
      setInput("")
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
              value={input}
              onChange={handleChange}
              placeholder="add to do"
              className='todo-input'  />
            <button type='submit' className='todo-button'>Add</button>
        </form>
    </div>
  )
}

export default Form