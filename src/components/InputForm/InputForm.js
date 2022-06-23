import React, { Component } from 'react'


export class InputForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			inputView: '',
		}
	}


	setInputView = (text) => {
		this.setState({
			inputView: text
		})
	}
	clearInput = () => {
		this.setState({
			inputView: ''
		})
	}

	render() {
		return (
			<div className='form-container'>
				<p>Task</p>
				<input
					placeholder='enter your task here'
					onChange={(event) => this.setInputView(event.target.value)}
					value={this.state.inputView}
				/>
				<button
					onClick={() => {
						this.props.addTask(this.state.inputView);
						this.clearInput()
					}}
				>OK</button>
			</div >
		)
	}
}

export default InputForm
