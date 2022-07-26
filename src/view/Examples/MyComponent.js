import React from "react";
class MyComponent extends React.Component {
  state = {
    name: "dang",
    age: 21,
  };
  render() {
    return (
      <>
        <h1>hello form MyComponent my name is {this.state.name}</h1>
        <div className="mydiv">i am {this.state.age} year old</div>
      </>
    );
  }
}
export default MyComponent;
