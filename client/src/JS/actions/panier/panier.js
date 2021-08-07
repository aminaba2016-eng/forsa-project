import {
    GET_PANIERS_FAIL,
    GET_PANIERS_SUCCESS,
    GET_PANIERS_LOAD,
    DELETE_PANIER,
    GET_PANIER,
    EDIT_PANIER,
} from "../../const/panier/panier";
import axios from "axios";

export const getPaniers = () => async (dispatch) => {
    dispatch({ type: GET_PANIERS_LOAD });
    try {
        let result = await axios.get("/panier");
        console.log(result)
        dispatch({ type: GET_PANIERS_SUCCESS, payload: result.data });
    } catch (error) {
        dispatch({ type: GET_PANIERS_FAIL, payload: error });
        console.log(error);
    }
};

export const deletPanier = (id) => (dispatch) => {
    axios
        .delete(`/panier/${id}`)
        .then((res) => dispatch(getPaniers()))
        .catch((err) => console.log(err));
};

export const getPanier = (id) => (dispatch) => {
    axios
        .get(`/panier/${id}`)
        .then((res) => dispatch({ type: GET_PANIER, payload: res.data.response }))
        .catch((err) => console.log(err));
};

export const postPanier = (user) => async (dispatch) => {
    try {
        const result = await axios.post("/panier", user);
        dispatch(getPaniers());
    } catch (error) {
        console.log(error.response);
    }
};

export const editPanier = (id, user) => (dispatch) => {
    axios
        .put(`/panier/${id}`, user)
        .then((res) => {
            dispatch({ type: EDIT_PANIER, payload: res.data.message });
        })
        .then(dispatch(getPaniers()))
        .catch((err) => console.log(err));
};