import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import './Task.css';
export default class Task extends Component {
  state = {
    created: formatDistanceToNow(this.props.date, { includeSeconds: true }),
  };

  componentDidMount() {
    this.timerID = setInterval(
      () => this.setState({ created: formatDistanceToNow(this.props.date, { includeSeconds: true }) }),
      1000
    );
  }
  render() {
    const itemProps = this.props;
    return (
      <div className="view">
        <input className="toggle" type="checkbox" onClick={itemProps.onChangeCompleted}></input>
        <label>
          <span className="description">{itemProps.label}</span>
          <span className="created">created {this.state.created} ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick={itemProps.onDeleted}></button>
      </div>
    );
  }
}
