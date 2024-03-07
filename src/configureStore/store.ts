import { accountReducer } from "../reducers/accountReducer"
import { legacy_createStore as createStore } from "redux";

const initialState = {
    balance: 0
}

// export const store = createStore(accountReducer, initialState);
export const store = createStore(accountReducer, initialState);
