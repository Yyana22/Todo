import React, { Component } from 'react'
import './App.css'
import AppHeader from '../AppHeader'
import TaskList from '../TaskList'
import Footer from '../Footer'
import PropTypes from 'prop-types'
export default class App extends Component {
	static defaultProps = { //если нужны значения по умолчанию, но они не всегда передаются
		myName: 'Yana'
	}
	static propTypes = {
		myName: PropTypes.string //.isRequired
	}

	maxId = 100;
	state = {
		todoData: [
			this.createTodoItem('drink coffe'),
			this.createTodoItem('work'),
			this.createTodoItem('read'),
		],
		filter: 'All'
	}
	createTodoItem(label) {
		return {
			label: label,
			id: this.maxId++,
			class: null,
			completed: false,
			date: new Date()
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

	filterChange = (e) => {
		this.setState(() => {
			let newFilter = e.target.innerText
			return {
				filter: newFilter
			}
		})
	}
	clearCompleted = () => {
		this.setState(({ todoData }) => {
			const newArr = todoData.filter((el) => !el.completed)
			return {
				todoData: newArr
			};
		});
	}
	render() {
		const { todoData } = this.state
		const countCompleted = todoData.filter((el) => el.completed).length
		const countTodo = todoData.length - countCompleted;
		let newArr = []
		switch (this.state.filter) {
			case 'All':
				newArr = todoData;
				break
			case 'Active':
				newArr = todoData.filter((el) => !el.completed);
				break
			case 'Completed':
				newArr = todoData.filter((el) => el.completed);
				break
			default:
				console.log('hi')
				break
		}
		return (
			<div className="todoapp" >
				<AppHeader onAddItem={this.onAddItem} />
				<section className="main">
					<TaskList
						arrData={newArr}
						onChangeCompleted={this.onChangeCompleted}
						onDeleted={this.onDeleted}
					/>
				</section>
				<Footer
					todo={countTodo}
					filterChange={this.filterChange}
					clearCompleted={() => {
						this.clearCompleted()
					}}
				/>
			</div>
		)
	}
}