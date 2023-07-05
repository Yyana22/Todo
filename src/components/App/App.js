import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

import AppHeader from '../AppHeader';
import TaskList from '../TaskList';
import Footer from '../Footer';
export default class App extends Component {
  static defaultProps = {
    //если нужны значения по умолчанию, но они не всегда передаются
    myName: 'Yana',
  };
  static propTypes = {
    myName: PropTypes.string, //.isRequired
  };
  interval;
  maxId = 100;
  state = {
    todoData: [],
    filter: 'All',
  };
  createTodoItem(label, min, sec) {
    if (min < 10) {
      min = `${0}${min}`;
    } else if (sec < 10) {
      sec = '0' + sec;
    }
    return {
      label: label,
      id: this.maxId++,
      class: null,
      completed: false,
      date: new Date(),
      minutes: Number(min),
      seconds: Number(sec),
    };
  }
  onToggleProperty = (arr, id, property) => {
    const idx = arr.findIndex((item) => item.id === id);
    const newItem = { ...arr[idx], [property]: !arr[idx][property] };
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  };
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
      const before = todoData.slice(0, idx);
      const after = todoData.slice(idx + 1);
      return {
        todoData: [...before, ...after],
      };
    });
  };
  onToggleEdit = (text, id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((item) => item.id === id);
      const newItem = { ...todoData[idx], label: text };
      const newArray = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];
      return {
        todoData: newArray,
      };
    });
  };
  onAddItem = (text, minutes, seconds) => {
    this.setState(({ todoData }) => {
      const newItem = this.createTodoItem(text, minutes, seconds);
      return {
        todoData: [...todoData, newItem],
      };
    });
  };
  filterChange = (e) => {
    this.setState(() => {
      let newFilter = e.target.id;
      return {
        filter: newFilter,
      };
    });
  };
  clearCompleted = () => {
    this.setState(({ todoData }) => {
      const newArr = todoData.filter((el) => !el.completed);
      return {
        todoData: newArr,
      };
    });
  };

  onTimeLeft = (id) => {
    try {
      this.setState(({ todoData }) => {
        const idx = this.state.todoData.findIndex((item) => item.id === id);
        const reachableItem = todoData[idx];
        if (reachableItem.minutes !== 0 && reachableItem.seconds === 0) {
          const newItem = { ...reachableItem, minutes: reachableItem.minutes - 1, seconds: 59 };
          const newArr = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];
          return {
            todoData: newArr,
          };
        } else if (reachableItem.minutes === 0 && reachableItem.seconds === 0) {
          const newItem = { ...reachableItem, minutes: 0, seconds: 0 };
          const newArr = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];
          return {
            todoData: newArr,
          };
        } else {
          const newItem = { ...reachableItem, seconds: reachableItem.seconds - 1 };
          const newArr = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];
          return {
            todoData: newArr,
          };
        }
      });
    } catch (e) {
      console.log(e);
    }
  };
  startCounting = (id) => {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.onSecondsToComplete(id);
    }, 1000);
  };

  stopCounting = () => {
    clearInterval(this.interval);
  };
  render() {
    const { todoData } = this.state;
    const countCompleted = todoData.filter((el) => el.completed).length;
    const countTodo = todoData.length - countCompleted;
    let newArr = [];
    switch (this.state.filter) {
      case 'All':
        newArr = todoData;
        break;
      case 'Active':
        newArr = todoData.filter((el) => !el.completed);
        break;
      case 'Completed':
        newArr = todoData.filter((el) => el.completed);
        break;
      default:
        console.log('hi');
        break;
    }
    return (
      <div className="todoapp">
        <AppHeader onAddItem={this.onAddItem} />
        <section className="main">
          <TaskList
            onSecondsToComplete={this.onTimeLeft}
            arrData={newArr}
            onChangeCompleted={this.onChangeCompleted}
            onDeleted={this.onDeleted}
            onToggleEdit={this.onToggleEdit}
            onStartCounting={this.startCounting}
            onStopCounting={this.stopCounting}
          />
        </section>
        <Footer
          todo={countTodo}
          filterChange={this.filterChange}
          clearCompleted={() => {
            this.clearCompleted();
          }}
          activeFilter={this.state.filter}
        />
      </div>
    );
  }
}
