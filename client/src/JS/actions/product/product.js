import {
    GET_PRODUCTS_FAIL,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_LOAD,
    DELETE_PRODUCT,
    GET_PRODUCT,
    EDIT_PRODUCT,
} from "../../const/product/product";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
    dispatch({ type: GET_PRODUCTS_LOAD });
    try {
        let result = await axios.get("/product");
        console.log(result)
        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: result.data });
    } catch (error) {
        dispatch({ type: GET_PRODUCTS_FAIL, payload: error });
        console.log(error);
    }
};

export const deleteProduct = (id) => (dispatch) => {
    axios
        .delete(`/product/${id}`)
        .then((res) => dispatch(getProducts()))
        .catch((err) => console.log(err));
};

export const getProduct = (id) => (dispatch) => {
    axios
        .get(`/product/${id}`)
        .then((res) => dispatch({ type: GET_PRODUCT, payload: res.data.response }))
        .catch((err) => console.log(err));
};

export const postProduct = (post) => async (dispatch) => {
    try {
        const result = await axios.post("/product", post);
        dispatch(getProducts());
    } catch (error) {
        console.log(error.response);
    }
};

export const editProduct = (id, user) => (dispatch) => {
    axios
        .put(`/product/${id}`, user)
        .then((res) => {
            dispatch({ type: EDIT_PRODUCT, payload: res.data.message });
        })
        .then(dispatch(getProducts()))
        .catch((err) => console.log(err));
};