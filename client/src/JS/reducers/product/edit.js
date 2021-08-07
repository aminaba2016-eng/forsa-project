import { TOGGLLE_FALSE, TOGGLLE_TRUE } from "../../const/product/edit";

const initialState = {
  edit: false,
};
export const editProductReducer = (state = initialState, { type }) => {
  switch (type) {
    case TOGGLLE_TRUE:
      return { ...state, edit: true };

    case TOGGLLE_FALSE:
      return { ...state, edit: false };

    default:
      return state;
  }
};