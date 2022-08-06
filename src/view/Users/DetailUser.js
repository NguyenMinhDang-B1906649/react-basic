import React, { Component } from "react";
import { withRouter } from "../../hoc/withRouter";
import axios from "axios";
import "./detailUser.scss";
class DetailUser extends Component {
  state = {
    detailUser: {},
  };
  async componentDidMount() {
    let urlParams = this.props.params;
    let user = await axios.get(`https://reqres.in/api/users/${urlParams.id}`);
    this.setState({
      detailUser: user && user.data && user.data.data ? user.data.data : {},
    });
  }
  handleBack = () => {
    this.props.navigate("/users");
  };
  render() {
    let { detailUser } = this.state;
    let objEmpty = Object.keys(detailUser).length === 0;
    return (
      !objEmpty && (
        <div>
          <table className="detail-user">
            <thead>
              <tr>
                <th>Email</th>
                <th>First name</th>
                <th>Last name</th>
                <th>Avatar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{detailUser.email}</td>
                <td>{detailUser.first_name}</td>
                <td>{detailUser.last_name}</td>
                <td>
                  <img src={detailUser.avatar} alt="" />
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={4}>
                  <button onClick={() => this.handleBack()}>Back</button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      )
    );
  }
}

export default withRouter(DetailUser);
