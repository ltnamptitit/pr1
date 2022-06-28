import './App.scss';
import React, { useState } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { v4 as uuidv4 } from 'uuid';
import Task from './components/Task/Task';
import Form from './components/InputForm/Form';
import { addTask } from './redux/action'

export default function App() {

	const lists = useSelector(state => state.lists)


	return (
		<div className='App'>
			<Form />
			<div className='taskList-container'>
				{
					lists.map((item) => {
						return <Task
							key={item.id}
							task={item}
						/>
					})
				}
			</div>
		</div>
	)
}
