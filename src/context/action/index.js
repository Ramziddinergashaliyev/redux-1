export const ADD_USER = "USER";
export const REMOVE = "REMOVE";
export const EDIT = "EDIT";

export const AddUser = (payload) => {
  return {
    type: ADD_USER,
    payload,
  };
};
export const RemoveUser = (payload) => {
  return {
    type: REMOVE,
    payload,
  };
};
export const userEdit = (payload) => {
  return {
    type: EDIT,
    payload,
  };
};
