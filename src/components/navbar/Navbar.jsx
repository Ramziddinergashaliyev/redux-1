import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  let user = useSelector((state) => state.user);

  return (
    <div className="navbar">
      <h2>Redux</h2>
      <div className="navbar__link">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/create-user"}>Create user</NavLink>
        <NavLink to={"/all-users"}>
          All users <sup>{user.length}</sup>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
