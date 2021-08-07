import { TOGGE_FALSE, TOGGE_TRUE } from "../../const/category/edit";

const initialState = {
  edit: false,
};
export const editCategoryReducer = (state = initialState, { type }) => {
  switch (type) {
    case TOGGE_TRUE:
      return { ...state, edit: true };

    case TOGGE_FALSE:
      return { ...state, edit: false };

    default:
      return state;
  }
};