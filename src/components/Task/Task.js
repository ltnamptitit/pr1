import React, { useState } from 'react'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { deleteTask, updateTask } from '../../redux/action'

import './style.scss'
export default function Task(props) {

    const [isEdit, setIsEdit] = useState(false)
    const [editedTask, setEditedTask] = useState(props.task.task)
    const dispatch = useDispatch()


    const handleUpdate = () => {
        handleUpdateButtonClick()
        setIsEdit(!isEdit)
    }

    const handleDeleteButtonClick = () => {
        dispatch(deleteTask(props.task))
    }

    const handleUpdateButtonClick = () => {
        dispatch(updateTask({
            ...props.task,
            task: editedTask
        }))
    }

    const onKeyPressEnter = (event) => {
        if (event.keyCode == 13) {
            handleUpdate()

        }
    }
    return (

        <div className='task' >
            {
                !isEdit ? (
                    <div
                        className='task-content'
                        onClick={() => setIsEdit(!isEdit)}
                    >
                        {editedTask}
                    </div>

                ) : (
                    <input
                        value={editedTask}
                        onChange={(event) => setEditedTask(event.target.value)}
                        onKeyDown={(event) => onKeyPressEnter(event)}
                    />
                )
            }
            <div className='button-container'>
                <button
                    onClick={() => handleDeleteButtonClick()}
                >Delete</button>
                {
                    !isEdit ? (
                        <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
                    ) : (
                        <button
                            onClick={() => handleUpdate()}
                        >Save</button>
                    )
                }
            </div>

        </div >
    )
}
