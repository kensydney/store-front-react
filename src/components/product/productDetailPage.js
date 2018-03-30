import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import * as productActions from '../../actions/productActions';
var images = require.context('../../../images');
import ClickableNum from './clickableNum';
import AddToCart from '../cart/addToCart';

class ProductDetailPage extends React.Component
{
    constructor(props){
      super(props);
    }

    componentWillReceiveProps(nextProps){
        if (this.props.quantity != nextProps.quantity) {
            this.setState({quantity: Object.assign({}, nextProps.quantity)});
        }
    }

    render()
    {
        const {product, quantity} = this.props;
        let img_src = images(`./${product.image}`);
        return(
            <div className="product-page">
              <div className="product-breadcrum">
                <hr />
                <Link to="/"><b> HOME </b></Link> /<b>PLATES /</b> {product.title}
              </div>
              <div className="row">
                <div className="col-lg-6  product-image">
                    <img src={img_src} className="img-responsive" />
                </div>
                <div className="col-lg-6  product-details">
                    <div className="product-brand">{product.brand}</div>
                    <div className="product-title">{product.title}</div>
                    <div className="product-price">{product.price}</div>
                    <div className="product-description">{product.description }</div>
                    <hr />
                    <div className="box-container"> 
                      <ClickableNum quantity={quantity}/>
                      <AddToCart product={product} quantity={quantity} />
                    </div>                                       
                </div>
              </div>
            </div>
        )
    }
}

function getProductByTitle(products, title){
    const product = products.filter(product => product.title == title);
    if (product) return product[0];
    return null;
}

function mapStateToProps(state, ownProps)
{   
    const productTitle = ownProps.params.title;
    let product = {};
    if (productTitle && state.products.length > 0)
    {
        product = getProductByTitle(state.products, productTitle);
    }

    return {
        product: product,
        quantity: state.quantity
    };
}

ProductDetailPage.propTypes = {
    product: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(ProductDetailPage);