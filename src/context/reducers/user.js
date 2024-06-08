import { ADD_USER, REMOVE, EDIT } from "../action";

const initialState = JSON.parse(localStorage.getItem("userState")) || [];

export const user = (state = initialState, { payload, type }) => {
  switch (type) {
    case ADD_USER:
      const userLocal = (state = [...state, payload]);
      localStorage.setItem("userState", JSON.stringify(userLocal));
      return userLocal;
    case REMOVE:
      const removeLocal = (state = state.filter((el) => el.id !== payload.id));
      localStorage.setItem("userState", JSON.stringify(removeLocal));
      return removeLocal;
    case EDIT:
      const editLocal = state.map((el) =>
        el.id === payload.id ? payload : el
      );
      localStorage.setItem("userState", JSON.stringify(editLocal));
      return editLocal;
    default:
      return state;
  }
};
