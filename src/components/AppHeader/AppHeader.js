import React, { Component } from 'react'
import './AppHeader.css'
import NewTaskForm from '../NewTaskForm'

export default class AppHeader extends Component {
	render() {
		const headerProps = this.props
		return (
			<div className="app-header">
				<h1>todos</h1>
				<p>completed: {headerProps.completed}</p>
				<p>todo: {headerProps.todo}</p>
				<NewTaskForm onAddItem={headerProps.onAddItem} />
			</div>
		)
	}
}