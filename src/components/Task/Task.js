import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import './Task.css';
export default class Task extends Component {
  interval = 0;
  state = {
    created: formatDistanceToNow(this.props.date, { includeSeconds: true }),
    value: '',
    class: 'formDisable',
    minutes: this.props.minutes,
    seconds: this.props.seconds,
    isRunning: false,
  };

  componentDidMount() {
    this.secundomer = setInterval(
      () => this.setState({ created: formatDistanceToNow(this.props.date, { includeSeconds: true }) }),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.secundomer);
  }
  onEditing = () => {
    this.setState({
      class: '',
    });
  };

  onInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onToggleEdit(this.state.value, this.props.id);
    this.setState({
      class: 'formDisable',
    });
  };
  startCounting = () => {
    console.log('start');
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.props.refreshTimer();
    }, 1000);
    this.setState({ isRunning: true });
  };

  stopCounting = () => {
    console.log('stop');
    clearInterval(this.interval);
    this.setState({ isRunning: false });
  };
  render() {
    const itemProps = this.props;
    return (
      <div className="view">
        <input className="toggle" type="checkbox" onClick={itemProps.onChangeCompleted}></input>
        <label>
          <span className="description">{itemProps.label}</span>
          <span className="timer-wrap">
            {this.state.isRunning ? (
              <button className="icon icon-pause" onClick={this.stopCounting} disabled={!this.state.isRunning}></button>
            ) : (
              <button className="icon icon-play" onClick={this.startCounting} disabled={this.state.isRunning}></button>
            )}
            <span className="timer">
              {this.props.minutes} : {this.props.seconds}
            </span>
          </span>
          <span className="created">created {this.state.created} ago</span>
        </label>
        <div>
          <button className="icon icon-edit" onClick={this.onEditing}></button>
          <button className="icon icon-destroy" onClick={itemProps.onDeleted}></button>
        </div>
        <form className={this.state.class} onSubmit={this.onSubmit}>
          <input className="edit" type="text" onChange={this.onInputChange} value={this.value}></input>
        </form>
      </div>
    );
  }
}
