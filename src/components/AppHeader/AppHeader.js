import React, { Component } from 'react'
import './AppHeader.css'
import NewTaskForm from '../NewTaskForm'

export default class AppHeader extends Component {
	render() {
		return (
			<div className="app-header">
				<h1>todos</h1>
				<NewTaskForm />
			</div>
		)
	}
}