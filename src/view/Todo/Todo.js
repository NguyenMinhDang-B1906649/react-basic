import React, { Component } from "react";
import TodoInput from "./TodoInput";
import "./todo.scss";
import TodoList from "./TodoList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
export class Todo extends Component {
  state = {
    jobs: [],
  };
  handleAdd = (job) => {
    if (!job.title || job.title.match(/^[\s\n\r]*$/) !== null) {
      toast.error("invalid value");
      return;
    }
    this.setState({
      jobs: [...this.state.jobs, job],
    });
    toast.success("You have successfully added");
  };
  handleDelete = (item) => {
    let newJobs = this.state.jobs;
    let indexJob = newJobs.indexOf(item);
    newJobs.splice(indexJob, 1);
    this.setState({
      jobs: newJobs,
    });
    toast.success("You have successfully deleted");
  };
  handleUpdate = (item) => {
    if (!item.title || item.title.match(/^[\s\n\r]*$/) !== null) {
      toast.error("invalid value");
      return;
    }
    let updateJobs = this.state.jobs.map((i) => {
      if (i.id === item.id) {
        i.title = item.title;
      }
      return i;
    });
    this.setState({
      jobs: updateJobs,
    });
    toast.success("You have successfully updated");
  };
  render() {
    return (
      <div className="todo_wrapper">
        <div className="todo_container">
          <h1>Todo App with class component react</h1>
          <TodoInput handleAdd={this.handleAdd} />
          <TodoList
            editTodo={this.state.editTodo}
            jobs={this.state.jobs}
            handleDelete={this.handleDelete}
            handleEdit={this.handleUpdate}
          />
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </div>
    );
  }
}

export default Todo;
