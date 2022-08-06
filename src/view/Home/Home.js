import React, { Component } from "react";
import { connect } from "react-redux/es/exports";
export class Home extends Component {
  handleDelete = (user) => {
    this.props.deleteUserRedux(user);
  };
  handleAdd = () => {
    this.props.addUserRedux();
  };
  render() {
    const { reduxData } = this.props;
    return (
      <div style={{ textAlign: "center", fontSize: 18 }}>
        {reduxData &&
          reduxData.length > 0 &&
          reduxData.map((user, index) => {
            return (
              <div key={user.id}>
                {user.id}----{user.name}-----
                <span onClick={() => this.handleDelete(user)}>X</span>
              </div>
            );
          })}
        <button onClick={() => this.handleAdd()}>Add random user</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    reduxData: state.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) => {
      dispatch({ type: "DELETE_USER", payload: userDelete });
    },
    addUserRedux: () => {
      dispatch({ type: "ADD_USER" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
