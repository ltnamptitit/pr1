import React, { useState } from 'react'
import './App.css'

import InputForm from './components/InputForm/InputForm';
import Task from './components/Task/Task';

import { v4 as uuidv4 } from 'uuid'
export default function App() {

    const [todoList, setTodoList] = useState(() => {
        const todos = JSON.parse(localStorage.getItem('todos'))
        if (todos) {
            return todos
        }
        else {
            return []
        }
    })

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todoList))
    }, [todoList])

    addTask = (task) => {
        if (!task.trim()) {
            alert('please input your task')
            return;
        }
        const newTask = {
            id: uuidv4(),
            task: task.trim(),
            isDone: false
        }
        this.setState({
            todoList: [...this.state.todoList, newTask]
        })
    }

    deleteTask = (taskID) => {
        const newState = this.state.todoList.filter(item => item.id !== taskID)
        this.setState({
            todoList: [...newState]
        })
    }

    updateTask = (task) => {
        console.log(task)
    }



    return (
        <div className='App'>
            <InputForm addTask={this.addTask} />
            {/* <TaskList todoList={this.state.todoList} /> */}
            <div className='taskList-container'>
                {
                    this.state.todoList.map((item) => {
                        return <Task
                            key={item.id}
                            task={item}
                            deleteTask={this.deleteTask}
                            updateTask={this.updateTask}
                        />
                    })
                }
            </div>
        </div>
    )
}
