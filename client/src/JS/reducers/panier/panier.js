import {
    GET_PANIERS_FAIL,
    GET_PANIERS_SUCCESS,
    GET_PANIERS_LOAD,
    GET_PANIER,
    EDIT_PANIER,
} from "../../const/panier/panier";

const initialState = {
   paniers: [],
    loadPaniers: false,
    errors: null,
    panier: {},
    editPanier: "",
};

export const panierReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_PANIERS_LOAD:
            return { ...state, loadPaniers: true };
        case GET_PANIERS_SUCCESS:
            return { ...state, paniers: payload, loadPaniers: false };
        case GET_PANIERS_FAIL:
            return { ...state, loadPaniers: false, errors: payload };

        case GET_PANIER:
            return { ...state, panier: payload };
        case EDIT_PANIER:
            return { ...state, editPanier: payload };

        default: return state;

    }
}