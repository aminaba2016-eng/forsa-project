import {
    GET_CATEGORYS_FAIL,
    GET_CATEGORYS_SUCCESS,
    GET_CATEGORYS_LOAD,
    GET_CATEGORY,
    EDIT_CATEGORY,
} from "../../const/category/category";

const initialState = {
    categorys: [],
    loadCategorys: false,
    errors: null,
    category: {},
    editCategory: "",
};

export const categoryReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_CATEGORYS_LOAD:
            return { ...state, loadCategorys: true };
        case GET_CATEGORYS_SUCCESS:
            return { ...state, categorys: payload, loadCategorys: false };
        case GET_CATEGORYS_FAIL:
            return { ...state, loadCategorys: false, errors: payload };

        case GET_CATEGORY:
            return { ...state, category: payload };
        case EDIT_CATEGORY:
            return { ...state, editCategory: payload };

        default: return state;

    }
}