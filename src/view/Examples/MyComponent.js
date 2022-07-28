import React from "react";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {
  state = {
    name: "dang",
    age: 21,
    jobs: [
      { id: "job1", content: "Dev", salary: "500$" },
      { id: "job2", content: "Tester", salary: "400$" },
      { id: "job3", content: "Project manager", salary: "1500$" },
    ],
  };
  handleChangeInput = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleChangeAge = (e) => {
    this.setState({
      age: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <>
        <form>
          <label>Name</label>
          <br />
          <input
            type="text"
            onChange={(e) => this.handleChangeInput(e)}
            value={this.state.name}
          ></input>
          <br />
          <label>Age</label>
          <br />
          <input
            type="text"
            onChange={(e) => this.handleChangeAge(e)}
            value={this.state.age}
          ></input>
          <br />
          <button type="submit" onClick={(e) => this.handleSubmit(e)}>
            submit
          </button>
        </form>
        <ChildComponent jobs={this.state.jobs} />
      </>
    );
  }
}
export default MyComponent;
