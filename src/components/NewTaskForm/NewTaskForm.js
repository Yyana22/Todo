import React, { Component } from 'react';
import './NewTaskForm.css';

export default class NewTaskForm extends Component {
  static defaultProps = {
    onAddItem: () => {
      console.log('default onAddItem in NewTaskForm');
    },
  };
  state = {
    label: '',
  };

  onChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAddItem(this.state.label);
    this.setState({
      label: '',
    });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          required
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={this.onChange}
          value={this.state.label}
        ></input>
      </form>
    );
  }
}
