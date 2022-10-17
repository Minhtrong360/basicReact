import React from "react";
import "./Nav.scss";
import { Link, NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div className="topnav">
        <NavLink to="/" activeClassName="active" exact>
          Home
        </NavLink>
        <NavLink to="/todos" activeClassName="active" exact>
          Todos
        </NavLink>
        <NavLink to="/about" activeClassName="active" exact>
          About
        </NavLink>
        {/* {Không hiển thị active link} */}
        {/* <Link to={"/"}>.Home</Link>
        <Link to={"/todos"}>Todos</Link>
        <Link to={"/about"}>About</Link> */}
      </div>
    );
  }
}

export default Nav;
