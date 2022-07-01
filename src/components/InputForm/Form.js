import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { addTask } from '../../redux/action'


export default function Form(props) {
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    const onChangeInput = (text) => {
        setInput(text)
    }

    const handleAddButtonClick = () => {
        if (input.trim()) {
            dispatch(addTask({
                id: uuidv4(),
                task: input.trim(),
                isDone: false
            }))
        }
        else
            return;
    }

    const onKeyPressEnter = (event) => {
        if (event.keyCode == 13) {
            handleAddButtonClick()
            setInput('')
        }
    }

    return (
        <div className='form-container'>
            <p>Task</p>
            <input
                type='text'
                placeholder='enter your task here'
                onChange={(event) => onChangeInput(event.target.value)}
                value={input}
                onKeyDown={(event) => onKeyPressEnter(event)}
            />
            <button
                onClick={() => {
                    handleAddButtonClick();
                    setInput('')
                }}
            >OK</button>
        </div >
    )
}
