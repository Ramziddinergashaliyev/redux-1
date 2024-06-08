import React, { useState } from "react";
import "./Users.css";
import male from "../../assets/male-avatar-boy-face-man-user-9.svg";
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg";
import { useDispatch, useSelector } from "react-redux";
import { RemoveUser } from "../../context/action";
import EditUser from "../editUser/EditUser";

function Users() {
  const [edit, setEdit] = useState(null);
  let user = useSelector((state) => state.user);
  let dispatch = useDispatch();
  return (
    <>
      <div className="users__wrapper">
        {user?.map((el) => (
          <div key={el.id} className="users__card">
            <img src={el.gender === "male" ? male : female} alt="" />
            <h2>{el?.name}</h2>
            <p>{el?.profession}</p>
            <p>{el?.age}</p>
            <div className="users__btns">
              <button onClick={() => dispatch(RemoveUser(el))}>Remove</button>
              <button onClick={() => setEdit(el)} className="edit__btn">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
      {edit ? <EditUser data={edit} setClose={setEdit} /> : <></>}
    </>
  );
}

export default Users;
