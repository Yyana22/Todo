import React, { Component } from 'react'
import Task from '../Task'
import './TaskList.css'

export default class TaskList extends Component {
	render() {
		const elements = this.props.arrData.map((item) => {
			const { id, ...itemProps } = item
			let classNames = ''
			if (itemProps.completed) {
				classNames += "completed"
			}
			if (itemProps.class === 'editing') {
				return (
					<li className={itemProps.class} key={id}>
						<Task {...itemProps} />
						<input type="text" className="edit" defaultValue="Editing task" />
					</li>
				)
			}
			return (
				<li className={itemProps.class + ` ${classNames}`} key={id}>
					<Task
						{...itemProps}
						onChangeCompleted={() => { this.props.onChangeCompleted(id) }}
						id={id}
						onDeleted={() => {
							this.props.onDeleted(id)
						}}
						fixTime={this.props.fixTime}
					/>
				</li>
			)
		})
		return (
			<ul className="list-group todo-list">
				{elements}
			</ul>
		)
	}
}