import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
var images = require.context('../../../images');
import Logo from '../../../images/logo.png';
import {bindActionCreators} from 'redux';
import * as cartActions from '../../actions/cartActions';
import {Link} from 'react-router';
import RemoveFromCart from './removeFromCart';

class MiniCart extends React.Component{
    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.state, {showCart: false});
        this.handleClick = this.handleClick.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
    }

   
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClick()
    {
        this.setState({showCart: !this.state.showCart});
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({showCart: false});
        }
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    render(){
        let cart = this.props.cart;       
        return(
            <div className="minicart col-lg-3" ref={this.setWrapperRef}>
                <button className="cart-toggle pull-right" onClick={this.handleClick}>
                    <div className="pull-right">MY CART ({cart.length}) <b className="caret"></b></div>      
                </button>
                {
                    this.state.showCart ? <div className="cart">
                    <ul className="cartContent"> 
                     {cart.map((ca) => {
                          return(
                            <div className="row">
                                <div className="thumbnail col-lg-3">
                                <img src={Logo} />
                                </div>
                                <div className="miniDetail col-lg-7">
                                    <div className="miniTitle">{ca.product.title} * {ca.quantity}</div>
                                    <div className="miniBrand">{ca.product.brand}</div>
                                    <div className="miniPrice">{ca.product.price}</div>
                                </div>
                                <RemoveFromCart product={ca.product} />                                
                          </div>
                          )
                          
                      })}                
                    </ul>
                    <hr />
                    <div className="row">
                        <div className="col-sm-8 total">
                            TOTAL
                        </div>
                    </div>
                    <button className="checkoutButton">CHECKOUT</button>
                    <Link to={'/cart'} class="detail-link">
                    <span>VIEW CART</span>
                    </Link>
                    </div> : null
                }
                
            </div>
        )
    }        
}

function mapStateToProps(state, ownProps){   
    return {
        cart: state.cart
    };
}

function mapDispatchToProps(dispatch)
{
     return {
        actions: bindActionCreators(cartActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MiniCart);