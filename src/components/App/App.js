import React, { Component } from 'react'
import './App.css'
import AppHeader from '../AppHeader'
import TaskList from '../TaskList'
import Footer from '../Footer'
import ItemAddForm from '../ItemAddForm'

export default class App extends Component {
	maxId = 100;
	state = {
		todoData: [
			this.createTodoItem('drink coffe'),
			this.createTodoItem('work'),
			this.createTodoItem('read'),
		]
	}
	createTodoItem(label) {
		return {
			label: label,
			id: this.maxId++,
			class: null,
			completed: false
		}
	}

	onToggleProperty = (arr, id, property) => {
		const idx = arr.findIndex((item) => item.id === id);
		const newItem = { ...arr[idx], [property]: !arr[idx][property] };
		return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
	}
	onChangeCompleted = (id) => {
		this.setState(({ todoData }) => {
			return {
				todoData: this.onToggleProperty(todoData, id, 'completed'),
			};
		});
	};
	onDeleted = (id) => {
		this.setState(({ todoData }) => {
			const idx = todoData.findIndex((item) => item.id === id);
			const before = todoData.slice(0, idx)
			const after = todoData.slice(idx + 1)
			return {
				todoData: [...before, ...after],
			};
		});
	};
	onAddItem = (text) => {
		this.setState(({ todoData }) => {
			const newItem = this.createTodoItem(text)
			return {
				todoData: [...todoData, newItem],
			};
		});
	}
	render() {
		const { todoData } = this.state
		const countCompleted = todoData.filter((el) => el.completed).length
		const countTodo = todoData.length - countCompleted;
		return (
			<div className="todoapp">
				<AppHeader completed={countCompleted} todo={countTodo} />
				<section className="main">
					<TaskList arrData={this.state.todoData}
						onChangeCompleted={this.onChangeCompleted}
						onDeleted={this.onDeleted}
					/>
				</section>
				<Footer />
				<ItemAddForm
					onAddItem={() => {
						this.onAddItem('text')
					}} />
			</div>
		)
	}
}