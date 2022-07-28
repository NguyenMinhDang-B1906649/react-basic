import React from "react";
class FormComponent extends React.Component {
  state = {
    name: "",
    age: "",
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
    if (this.state.name === "" || this.state.age === "") {
      alert("please enter the value of feild");
      return;
    }
    let random = Math.floor(Math.random() * 1001);
    let job = { id: random, ...this.state };
    this.props.addJob(job);
    this.setState({
      name: "",
      age: "",
    });
  };
  render() {
    return (
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
    );
  }
}
export default FormComponent;
