import React from "react";
import "./AllUsers.css";
import Users from "../../components/users/Users";
import Empty from "../../components/empty/Empty";
import { useSelector } from "react-redux";
import { user } from "../../context/reducers/user";

function AllUsers() {
  let user = true;
  return <div className="all__users">{user ? <Users /> : <Empty />}</div>;
}

export default AllUsers;
