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
			{ label: 'Completed task', id: 1, class: null, completed: false },
			{ label: 'Editing task', id: 2, class: 'editing', completed: false },
			{ label: 'Active task', id: 3, class: null, completed: false },
		]
	}

	onChangeCompleted = (id) => {
		this.setState(({ todoData }) => {
			const idx = todoData.findIndex((item) => item.id === id);
			const newItem = { ...todoData[idx], completed: !todoData[idx].completed };
			const newArray = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];
			return {
				todoData: newArray,
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
			const newItem = {
				label: text,
				id: this.maxId,
				class: null,
				completed: false
			}
			this.maxId++;
			return {
				todoData: [...todoData, newItem],
			};
		});
	}
	render() {
		return (
			<div className="todoapp">
				<AppHeader />
				<section className="main">
					<TaskList arrData={this.state.todoData}
						onChangeCompleted={(id) => {
							this.onChangeCompleted(id)
						}}
						onDeleted={(id) => {
							this.onDeleted(id)
						}}
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