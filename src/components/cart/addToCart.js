import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cartActions from '../../actions/cartActions';

class AddToCart extends React.Component
{
    constructor(props)
    {

        super(props);        
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick()
    {
        debugger;
        const {product, quantity} = this.props;
        this.props.actions.addToCart(product, quantity);
    }

    render()
    {        
        return (
          <button className="cart-link" onClick={this.handleClick}>
           <span>ADD TO CART</span>
          </button>
        );
        
    }
}

AddToCart.propTypes = {
    quantity: PropTypes.string.isRequired,
    product: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps)
{
    return{
        cart: state.cart
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(cartActions, dispatch)
    };
}

export default connect(() => {},mapDispatchToProps)(AddToCart)