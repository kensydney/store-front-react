import * as types from './actionTypes';

export function quantityAdd() {    
    return {type: types.INCREMENT_QUANTITY};
}

export function quantityMinus() {
    return {type: types.DECREMENT_QUANTITY};
}