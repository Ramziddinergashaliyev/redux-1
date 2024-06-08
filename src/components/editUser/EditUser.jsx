import React, { useEffect, useState } from "react";
import "./editUser.css";
import { useDispatch } from "react-redux";
import { userEdit } from "../../context/action";

const initialState = {
  id: 0,
  name: "",
  age: "",
  profession: "",
  gender: "",
};

function EditUser({ data, setClose }) {
  const [value, setValue] = useState(initialState);
  let dispatch = useDispatch();

  useEffect(() => {
    const { id, name, profession, age, gender } = data;
    setValue({ id, name, profession, age, gender });
  }, [data]);

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(userEdit(value));
    setClose(null);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="edit__user">
      <h2>Edit user</h2>
      <form onSubmit={handleEdit} className="edit__user-form" action="">
        <input
          required
          name="name"
          value={value.name}
          onChange={handleChange}
          type="text"
          placeholder="name"
        />
        <input
          required
          name="profession"
          value={value.profession}
          onChange={handleChange}
          type="text"
          placeholder="profession"
        />
        <input
          required
          name="age"
          value={value.age}
          onChange={handleChange}
          type="number"
          placeholder="age"
        />
        <select
          name="gender"
          value={value.gender}
          onChange={handleChange}
          id=""
        >
          <option value="">gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <div className="edit__btns">
          <button className="edit__btn btn" type="submit">
            Save
          </button>
          <button
            onClick={() => setClose(null)}
            type="button"
            className="edit-delete btn"
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditUser;
