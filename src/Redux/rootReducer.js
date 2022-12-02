import { todoReducer } from "./Reducers/todoReducer";
import { productReducer } from "./Reducers/productReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  todos: todoReducer,
  product: productReducer,
});
