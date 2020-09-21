import { combineReducers } from "redux";
import ProductReducer from "./reducer-products";
import ActiveProductReducer from "./reducer-product-active";

const allReducer = combineReducers({
  products: ProductReducer,
  activeProduct: ActiveProductReducer,
});

export default allReducer;
