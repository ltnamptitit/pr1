import React, { useState } from 'react'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { deleteTask, updateTask } from '../../redux/action'

import './style.scss'
export default function Task(props) {

    const [isEdit, setIsEdit] = useState(false)
    const [editedTask, setEditedTask] = useState(props.task.task)
    const dispatch = useDispatch()

    const onClickEdit = () => {
        setIsEdit(!isEdit)
    }

    const onClickSave = () => {
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
    return (

        <div className='task'>
            {
                !isEdit ? (
                    <div
                        className='task-content'
                        onClick={() => setIsEdit(!isEdit)}
                    >{editedTask}-{isEdit.toString()}</div>

                ) : (
                    <input
                        value={editedTask}
                        onChange={(event) => setEditedTask(event.target.value)}
                    />
                )
            }
            <div className='button-container'>
                <button
                    onClick={() => handleDeleteButtonClick()}
                >Delete</button>
                {
                    !isEdit ? (
                        <button onClick={onClickEdit}>Edit</button>
                    ) : (
                        <button
                            onClick={() => (
                                handleUpdateButtonClick(),
                                onClickSave()
                            )}
                        >Save</button>
                    )
                }
            </div>

        </div >
    )
}
