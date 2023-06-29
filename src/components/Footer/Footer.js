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
            <label htmlFor="All">
              <input
                type="radio"
                id="All"
                checked={this.props.activeFilter === 'All'}
                onChange={this.props.filterChange}
              />
              All
            </label>
          </li>
          <li>
            <label htmlFor="Active">
              <input
                type="radio"
                id="Active"
                checked={this.props.activeFilter === 'Active'}
                onChange={this.props.filterChange}
              />
              Active
            </label>
          </li>
          <li>
            <label htmlFor="Completed">
              <input
                type="radio"
                id="Completed"
                checked={this.props.activeFilter === 'Completed'}
                onChange={this.props.filterChange}
              />
              Completed
            </label>
          </li>
        </ul>

        <button onClick={this.props.clearCompleted} className="clear-completed">
          Clear completed
        </button>
      </footer>
    );
  }
}
