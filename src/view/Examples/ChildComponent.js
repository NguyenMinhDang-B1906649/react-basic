import React from "react";
class ChildComponent extends React.Component {
  state = {
    showList: false,
  };
  handleShow = () => {
    // if (this.state.showList === false) {
    //   this.setState({ showList: true });
    // } else {
    //   this.setState({ showList: false });
    // }
    this.setState({
      showList: !this.state.showList,
    });
  };
  render() {
    const { jobs } = this.props;
    return (
      <>
        {this.state.showList === false ? (
          <div>
            <button onClick={() => this.handleShow()}>Show</button>
          </div>
        ) : (
          <>
            <div>
              {jobs.map((item, index) => {
                return (
                  <div className="div" key={item.id}>
                    {item.name}-{item.age}{" "}
                    <span onClick={() => this.props.handleDeleteJob(item)}>
                      {" "}
                      x
                    </span>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShow()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}
export default ChildComponent;
