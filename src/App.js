import './App.scss';
import Task from './components/Task/Task';

import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from './components/InputForm/Form';

//initial local storage
let localList = [];
try {
	const lists = JSON.parse(localStorage.getItem('lists'))
	if (Array.isArray(lists)) {
		localList = [...lists]
	}
}
catch {

}

export default function App() {

	const [lists, setLists] = useState(localList)

	const saveData = (list_) => {
		localStorage.setItem('lists', JSON.stringify(list_))
	}

	const saveList = (list_) => {
		setLists(list_)
		saveData(list_)
	}

	const addTask = (text) => {
		if (!text.trim()) {
			alert('please enter your task')
			return;
		}
		const newTask = {
			id: uuidv4(),
			task: text.trim(),
			isDone: false
		}
		saveList([...lists, newTask])
	}

	const deleteTask = (id) => {
		const taskIndex = lists.findIndex(task => {
			return task.id === id
		})
		lists.splice(taskIndex, 1)
		saveList([...lists])
	}

	const updateTask = (text, id) => {
		saveList([...lists.map(item => {
			return item.id === id ? { ...item, task: text } : item
		})])
	}

	return (
		<div className='App'>
			<Form addTask={addTask} />
			<div className='taskList-container'>
				{
					lists.map((item) => {
						return <Task
							key={item.id}
							task={item}
							deleteTask={deleteTask}
							updateTask={updateTask}
						/>
					})
				}
			</div>
		</div>
	)
}
