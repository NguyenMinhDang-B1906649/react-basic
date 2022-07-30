import React, { Component } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
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
      <>
        <TodoInput handleAdd={this.handleAdd} />
        <TodoList
          editTodo={this.state.editTodo}
          jobs={this.state.jobs}
          handleDelete={this.handleDelete}
          handleEdit={this.handleUpdate}
        />
      </>
    );
  }
}

export default Todo;
