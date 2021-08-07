import { TOGGLLE_FALSE, TOGGLLE_TRUE } from "../../const/product/edit";

export const toggleTrue = () => {
    return {
        type: TOGGLLE_TRUE,
    };
};
export const toggleFalse = () => {
    return {
        type: TOGGLLE_FALSE,
    };
};