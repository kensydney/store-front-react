import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function quantityUpdate(state = initialState.quantity, action){
    if (action.type == types.INCREMENT_QUANTITY){
        return state + 1;
    } else if (action.type == types.DECREMENT_QUANTITY){
        return state - 1;
    }

    return state;
}
