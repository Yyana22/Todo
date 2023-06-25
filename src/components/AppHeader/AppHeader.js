import React, { Component } from 'react'
import './AppHeader.css'
import NewTaskForm from '../NewTaskForm'

export default class AppHeader extends Component {
	static defaultProps = {
		onAddItem: () => {
			console.log('default onAddItem in AppHeader')
		}
	}
	render() {
		const headerProps = this.props
		return (
			<div className="app-header">
				<h1>todos</h1>
				<NewTaskForm onAddItem={headerProps.onAddItem} />
			</div>
		)
	}
}