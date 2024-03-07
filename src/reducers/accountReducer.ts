import { DEPOSIT, WITHDRAW } from "../actions/accountActions";
import { Action, Stats } from "../utils/types";


export const accountReducer = (state: Stats, action: Action) => {
    console.log(state);
    console.log(action);
    switch (action.type) {
        case DEPOSIT:
            return { ...state, balance: state.balance + action.payload }
        case WITHDRAW:
            const res = state.balance - action.payload;
            return { ...state, balance: res < 0 ? state.balance : res }
        default:
            return state;
    }
}