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
    minutes: '',
    seconds: '',
  };
  onChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };
  onChangeTimeM = (e) => {
    const validateMinutes = +e.target.value.replace(/\0-9/g, '');
    this.setState({
      minutes: validateMinutes,
    });
  };

  onChangeTimeS = (e) => {
    const validateSeconds = +e.target.value.replace(/\0-9/g, '');
    this.setState({
      seconds: validateSeconds,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.onAddItem(this.state.label, this.state.minutes, this.state.seconds);
    this.setState({
      label: '',
      minutes: '',
      seconds: '',
    });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          required
          className="new-todo"
          placeholder="Task"
          onChange={this.onChange}
          value={this.state.label}
        ></input>
        <input
          type="number"
          required
          className="input-time-minutes input-timer"
          placeholder="Min"
          onChange={this.onChangeTimeM}
          min={0}
          max={59}
          value={this.state.minutes}
        ></input>
        <input
          type="number"
          required
          className="input-time-seconds input-timer"
          placeholder="Sec"
          onChange={this.onChangeTimeS}
          min={0}
          max={59}
          value={this.state.seconds}
        ></input>
        <button type="submit"></button>
      </form>
    );
  }
}
