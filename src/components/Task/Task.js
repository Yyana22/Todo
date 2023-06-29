import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import './Task.css';
export default class Task extends Component {
  state = {
    created: formatDistanceToNow(this.props.date, { includeSeconds: true }),
    value: '',
    class: 'formDisable',
  };

  componentDidMount() {
    this.timerID = setInterval(
      () => this.setState({ created: formatDistanceToNow(this.props.date, { includeSeconds: true }) }),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
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
  render() {
    const itemProps = this.props;
    return (
      <div className="view">
        <input className="toggle" type="checkbox" onClick={itemProps.onChangeCompleted}></input>
        <label>
          <span className="description">{itemProps.label}</span>
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
