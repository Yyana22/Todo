import React, { Component } from 'react'
import './Task.css'

export default class Task extends Component {
	render() {
		const itemProps = this.props;
		return (
			<div className='view'>
				<input className="toggle" type="checkbox" onClick={itemProps.onChangeCompleted}></input>
				<label>
					<span className="description">{itemProps.label}</span>
					<span className="created">created {itemProps.fixTime(itemProps.date)} seconds ago</span>
				</label>
				<button className="icon icon-edit"></button>
				<button className="icon icon-destroy" onClick={itemProps.onDeleted}></button>
			</div>
		)
	}
}
