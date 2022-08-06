import React, { Component } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
export class TodoList extends Component {
  state = {
    editTodo: {},
  };
  handleChange = (e) => {
    this.setState({
      editTodo: {
        title: e.target.value,
        id: this.state.editTodo.id,
      },
    });
  };
  handleEditJob = (item) => {
    this.setState({
      editTodo: item,
    });
  };
  render() {
    const { jobs, handleDelete, handleEdit } = this.props;
    let { editTodo } = this.state;
    let todosIsEmpty = Object.keys(editTodo).length === 0;
    return todosIsEmpty === true ? (
      jobs.map((item, index) => {
        return (
          <div key={item.id} className="todo_row">
            {" "}
            <span>{item.title}</span>
            <div className="icons">
              <RiCloseCircleLine
                onClick={() => handleDelete(item)}
                className="delete_icon"
              />
              <TiEdit
                className="edit_icon"
                onClick={() => this.handleEditJob(item)}
              />
            </div>
          </div>
        );
      })
    ) : (
      <div key={editTodo.id} className="todo_input_group">
        <input
          className="todo_input edit"
          type="text"
          value={editTodo.title}
          onChange={(e) => {
            this.handleChange(e);
          }}
        />
        <button
          className="todo_button edit"
          onClick={() => {
            handleEdit(editTodo);
            this.setState({
              editTodo: {},
            });
          }}
        >
          Update
        </button>
      </div>
    );
  }
}

export default TodoList;
