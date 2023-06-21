import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
	render() {
		return (
			<footer className="footer">
				<span className="todo-count">{this.props.todo} items left</span>
				<ul className="filters">
					<li>
						<button onClick={this.props.filterChange} className="selected">All</button>
					</li>
					<li>
						<button onClick={this.props.filterChange}>Active</button>
					</li>
					<li>
						<button onClick={this.props.filterChange}>Completed</button>
					</li>
				</ul>
				<button onClick={this.props.clearCompleted} className="clear-completed">Clear completed</button>
			</footer>
		)
	}
}
