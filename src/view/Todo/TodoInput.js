import React, { Component } from "react";
export class TodoInput extends Component {
  state = {
    title: "",
  };
  todoInputRef = React.createRef();
  handleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  handleSubmit = () => {
    let job = {
      title: this.state.title,
      id: Math.floor(Math.random() * 10001),
    };
    this.props.handleAdd(job);
    this.setState({
      title: "",
    });
    this.todoInputRef.current.focus();
  };
  render() {
    return (
      <div className="todo-input-group">
        <input
          ref={this.todoInputRef}
          className="todo-input"
          type="text"
          value={this.state.title}
          onChange={(e) => {
            this.handleChange(e);
          }}
        />
        <button
          className="todo-button"
          onClick={() => {
            this.handleSubmit();
          }}
        >
          Add
        </button>
      </div>
    );
  }
}

export default TodoInput;
