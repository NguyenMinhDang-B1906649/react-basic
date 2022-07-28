import React from "react";
import ChildComponent from "./ChildComponent";
import FormComponent from "./FormComponent";
class MyComponent extends React.Component {
  state = {
    jobs: [
      { id: "user1", name: "dang", age: "21" },
      { id: "user2", name: "phuong", age: "21" },
      { id: "user3", name: "bang", age: "21" },
    ],
  };
  handleAddJob = (job) => {
    this.setState({
      jobs: [...this.state.jobs, job],
    });
  };
  handleDeleteJob = (job) => {
    let newJobs = [...this.state.jobs];
    let index = newJobs.indexOf(job);
    newJobs.splice(index, 1);
    this.setState({
      jobs: newJobs,
    });
  };
  render() {
    return (
      <>
        <FormComponent addJob={this.handleAddJob} />

        <ChildComponent
          jobs={this.state.jobs}
          handleDeleteJob={this.handleDeleteJob}
        />
      </>
    );
  }
}
export default MyComponent;
