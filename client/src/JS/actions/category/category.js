import {
    GET_CATEGORYS_FAIL,
    GET_CATEGORYS_SUCCESS,
    GET_CATEGORYS_LOAD,
    DELETE_CATEGORY,
    GET_CATEGORY,
    EDIT_CATEGORY,
} from "../../const/category/category";
import axios from "axios";

export const getCategorys = () => async (dispatch) => {
    dispatch({ type: GET_CATEGORYS_LOAD });
    try {
        let result = await axios.get("/category");
        console.log(result)
        dispatch({ type: GET_CATEGORYS_SUCCESS, payload: result.data });
    } catch (error) {
        dispatch({ type: GET_CATEGORYS_FAIL, payload: error });
        console.log(error);
    }
};

export const deleteCategory = (id) => (dispatch) => {
    axios
        .delete(`/category/${id}`)
        .then((res) => dispatch(getCategorys()))
        .catch((err) => console.log(err));
};

export const getCategory = (id) => (dispatch) => {
    axios
        .get(`/category/${id}`)
        .then((res) => dispatch({ type: GET_CATEGORY, payload: res.data.response }))
        .catch((err) => console.log(err));
};

export const postCategory = (user) => async (dispatch) => {
    try {
        const result = await axios.post("/category", user);
        dispatch(getCategorys());
    } catch (error) {
        console.log(error.response);
    }
};

export const editCategory = (id, user) => (dispatch) => {
    axios
        .put(`/category/${id}`, user)
        .then((res) => {
            dispatch({ type: EDIT_CATEGORY, payload: res.data.message });
        })
        .then(dispatch(getCategorys()))
        .catch((err) => console.log(err));
};