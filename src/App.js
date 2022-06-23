import './App.css';
import Filter from './components/Filter/Filter';
import InputForm from './components/InputForm/InputForm';
// import TaskList from './components/TaskList/TaskList';
import Task from './components/Task/Task';

import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'

export class App extends Component {

	state = {
		todoList: []
	}

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

	// componentDidUpdate() {
	// 	console.log(this.state.todoList)
	// }
	render() {
		return (
			<div className='App'>
				<InputForm addTask={this.addTask} />
				<Filter />
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
}

export default App