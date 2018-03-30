import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function cartUpdate(state = initialState.cart, action){
    debugger;
    if (action.type == types.ADD_TO_CART){
        let ind = state.map((x) => {return x.product.title}).indexOf(action.product.title);
        if(ind >= 0)
        {
            let quantity = state[ind].quantity;
            return Object.assign([], state, [...state, {product: action.product, quantity:action.quantity + quantity}]);
        } 
        else
          return Object.assign([], state, [...state, {product: action.product, quantity: action.quantity}])         
    } else if (action.type == types.REMOVE_FROM_CART){
        let ind = state.map((x) => {return x.product.title}).indexOf(action.product.title);
        if(ind >= 0)
          return Object.assign([],[...state.slice(0, ind), ...state.slice(ind + 1)])
    }

    return state;
}