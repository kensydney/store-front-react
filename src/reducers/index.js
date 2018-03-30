import {combineReducers} from 'redux';
import products from './productReducer';
import quantity from './quantityReducer';
import cart from './cartReducer';

const rootReducer = combineReducers({
  products,
  quantity,
  cart
});

export default rootReducer;