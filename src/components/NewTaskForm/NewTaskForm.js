import React, { Component } from 'react'
import './NewTaskForm.css'

export default class NewTaskForm extends Component {
	render() {
		return (
			<div>
				<input className="new-todo"
					placeholder="What needs to be done?">
				</input>
			</div>
		)
	}
}
