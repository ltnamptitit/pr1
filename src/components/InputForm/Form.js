import React, { useState } from 'react'

export default function Form(props) {

    const [input, setInput] = useState('')

    const onChangeInput = (text) => {
        setInput(text)
    }

    return (
        <div className='form-container'>
            <p>Task</p>
            <input
                placeholder='enter your task here'
                onChange={(event) => onChangeInput(event.target.value)}
                value={input}
            />
            <button
                onClick={() => {
                    props.addTask(input);
                    setInput('')
                }}
            >OK</button>
        </div >
    )
}
