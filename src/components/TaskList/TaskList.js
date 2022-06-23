import './style.scss'

import React from 'react'

export default function TaskList(props) {
    // console.log(props)
    return (
        <div className='taskList-container'>
            {
                props.todoList.map((item) => {
                    return <div key={item.id}>{item.task}</div>
                })
            }
        </div>
    )
}
