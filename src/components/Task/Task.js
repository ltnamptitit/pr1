import React, { useState } from 'react'

import './style.scss'
export default function Task(props) {

    // const onClickDeleteButton = () => {
    //     console.log(props.task.id)
    // }

    const [isEdit, setIsEdit] = useState(false)
    const [editedTask, setEditedTask] = useState(props.task.task)

    const onClickEdit = () => {
        setIsEdit(!isEdit)
    }

    const onClickSave = () => {
        setIsEdit(!isEdit)
    }

    return (

        <div className='task'>
            {
                !isEdit ? (
                    <div className='task-content'>{editedTask}-{isEdit.toString()}</div>

                ) : (
                    <input
                        value={editedTask}
                        onChange={(event) => setEditedTask(event.target.value)}
                    />
                )
            }
            <div className='button-container'>
                <button
                    onClick={() => props.deleteTask(props.task.id)}
                >Delete</button>
                {
                    !isEdit ? (
                        <button onClick={onClickEdit}>Edit</button>
                    ) : (
                        <button onClick={() => (props.updateTask(editedTask), onClickSave())}>Save</button>
                    )
                }
            </div>

        </div>
    )
}
