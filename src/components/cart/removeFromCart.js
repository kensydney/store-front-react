import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cartActions from '../../actions/cartActions';

class RemoveFromCart extends React.Component
{
    constructor(props)
    {

        super(props);        
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick()
    {

        const {product} = this.props;
        this.props.actions.removeFromCart(product);
    }

    render()
    {
        return(
            <div class="miniRemove col-lg-1">
                <button onClick={this.handleClick}>X</button>                            
            </div>
        )
        
    }
}
    

    RemoveFromCart.propTypes = {
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

    export default connect(mapStateToProps,mapDispatchToProps)(RemoveFromCart)