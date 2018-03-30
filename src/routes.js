import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import ProductsPage from './components/product/ProductsPage';
import ProductDetailPage from './components/product/ProductDetailPage';
import CartPage from './components/cart/CartPage';


export default (
    <Route path="/" component={App} >
      <IndexRoute component={ProductsPage} /> 
      <Route path="details/:title" component={ProductDetailPage} /> 
      <Route path="cart" component={CartPage} />   
    </Route>
);