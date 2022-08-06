import React, { Component } from "react";
import axios from "axios";
import styles from "./users.module.scss";
import { withRouter } from "../../hoc/withRouter";
export class User extends Component {
  state = {
    listUsers: [],
  };
  async componentDidMount() {
    const response = await axios.get("https://reqres.in/api/users");
    this.setState({
      listUsers:
        response && response.data && response.data.data
          ? response.data.data
          : [],
    });
  }
  handleDetail = (id) => {
    this.props.navigate(`/users/${id}`, { replace: true });
  };
  render() {
    return (
      <>
        <h1 className={styles.title}>List user</h1>
        <table className={styles.customers}>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            {this.state.listUsers.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>
                    <button onClick={() => this.handleDetail(item.id)}>
                      Detail
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default withRouter(User);
