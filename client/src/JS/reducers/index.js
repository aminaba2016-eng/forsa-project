import { combineReducers } from "redux";
import {userReducer } from "./user/user"
import {produtReducer} from './product/product'
import {categoryReducer} from './category/category'
import{editCategoryReducer} from './category/edit'
import {editProductReducer} from './product/edit'
import {editUserReducer} from './user/edit'
import {panierReducer} from './panier/panier'

export const rootReducer=combineReducers({userReducer,produtReducer,categoryReducer,editUserReducer,editProductReducer,editCategoryReducer,panierReducer});