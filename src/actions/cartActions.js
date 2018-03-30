import * as types from './actionTypes';

export function addToCart(product, quantity) {
    return { type: types.ADD_TO_CART, product: product, quantity: quantity};
}

export function removeFromCart(product){
    return { type: types.REMOVE_FROM_CART, product: product};
}