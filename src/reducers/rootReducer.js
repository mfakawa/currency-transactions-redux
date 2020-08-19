import { combineReducers } from "redux";
import transactionsReducer from "./transactionsReducer";
import converterReducer from "./converterReducer";

export default combineReducers({
  transactions: transactionsReducer,
  converter: converterReducer
});
