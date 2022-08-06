import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";
export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header_right">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/todo">Todo App</NavLink>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </div>
      </div>
    );
  }
}

export default Header;
