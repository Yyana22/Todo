import React, { Component } from 'react'
import './ItemAddForm.css'

export default class ItemAddForm extends Component {
	render() {
		return (
			<div className='wrap-add-btn' >
				<button
					onClick={this.props.onAddItem}
					className='add-btn'
				>Add</button>
			</div>
		)
	}
}
