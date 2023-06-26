import React, { Component } from 'react';
import './Footer.css';
import PropTypes from 'prop-types';
export default class Footer extends Component {
  static defaultProps = {
    todo: 0,
    filterChange: () => {
      console.log('default filterChange in Footer');
    },
    clearCompleted: () => {
      console.log('default clearCompleted in Footer');
    },
  };

  static propTypes = {
    todo: PropTypes.number,
    filterChange: PropTypes.func,
    clearCompleted: PropTypes.func,
  };

  render() {
    return (
      <footer className="footer">
        <span className="todo-count">{this.props.todo} items left</span>
        <ul className="filters">
          <li>
            <button onClick={this.props.filterChange} className="selected">
              All
            </button>
          </li>
          <li>
            <button onClick={this.props.filterChange}>Active</button>
          </li>
          <li>
            <button onClick={this.props.filterChange}>Completed</button>
          </li>
        </ul>
        <button onClick={this.props.clearCompleted} className="clear-completed">
          Clear completed
        </button>
      </footer>
    );
  }
}
