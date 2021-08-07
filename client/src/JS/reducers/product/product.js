import {
    GET_PRODUCTS_FAIL,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_LOAD,
    GET_PRODUCT,
    EDIT_PRODUCT,
} from "../../const/product/product";

const initialState = {
    products: [],
    loadProducts: false,
    errors: null,
    product: {},
    editProduct: "",
};

export const produtReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_PRODUCTS_LOAD:
            return { ...state, loadProducts: true };
        case GET_PRODUCTS_SUCCESS:
            return { ...state, products: payload, loadProducts: false };
        case GET_PRODUCTS_FAIL:
            return { ...state, loadProducts: false, errors: payload };

        case GET_PRODUCT:
            return { ...state, product: payload };
        case EDIT_PRODUCT:
            return { ...state, editProduct: payload };

        default: return state;

    }
}