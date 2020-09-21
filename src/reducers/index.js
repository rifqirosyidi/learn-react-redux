import { combineReducers } from "redux";
import ProductReducer from "./reducer-products";

const allReducer = combineReducers({
  products: ProductReducer,
});

export default allReducer;
