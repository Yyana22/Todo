import React, { Component } from 'react'
import './App.css'
import AppHeader from '../AppHeader'
import TaskList from '../TaskList'
import Footer from '../Footer'
import PropTypes from 'prop-types'
import { format } from 'date-fns'
// format(new Date(2014, 1, 11), 'MM/dd/yyyy')
export default class App extends Component {
	static defaultProps = { //если нужны значения по умолчанию, но они не всегда передаются
		myName: 'Yana'
	}

	// static propTypes = { //установка типа пропса(чтобы избежать ошибок, если в пропсах придет не нужный тип)
	// 	myName: (props, propName, componentName) => { //без библиотеки prop-types
	// 		const value = props[propName];
	// 		if (typeof value == 'string') {
	// 			return null
	// 		}
	// 		return new TypeError(`${componentName}: ${propName} must be type 'string'`)
	// 	}
	// }

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
			date: format(new Date(), 'yyyy-MM-dd HH:mm:ss')
		}
	}
	remakeTime = (date) => {
		let firstArr = date.split(' ')
		let secondArr = firstArr[0].split('-')
		let therdArr = firstArr[1].split(':')
		let countSY = 31536000 * secondArr[0]
		let countSM = 2419200 * secondArr[1]
		let countSD = 86400 * secondArr[2]
		let countSH = 3600 * therdArr[0]
		let countSMin = 60 * therdArr[1]
		let countSS = therdArr[2]
		let count = countSY + countSM + countSD + countSH + countSMin + countSS
		return count
	}
	fixTime = (date) => {
		return this.remakeTime(format(new Date(), 'yyyy-MM-dd HH:mm:ss')) - this.remakeTime(date)
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
				<AppHeader completed={countCompleted} todo={countTodo} onAddItem={this.onAddItem} />
				<section className="main">
					<TaskList
						arrData={newArr}
						onChangeCompleted={this.onChangeCompleted}
						onDeleted={this.onDeleted}
						fixTime={this.fixTime}
					/>
				</section>
				<Footer todo={countTodo}
					filterChange={this.filterChange}
					clearCompleted={() => {
						this.clearCompleted()
					}}
				/>
			</div>
		)
	}
}