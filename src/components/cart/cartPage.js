import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import {connect} from 'react-redux';
var images = require.context('../../../images');
import Logo from '../../../images/logo.png';
import RemoveFromCart from './removeFromCart';

class CartPage extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const {cart} = this.props;
        return(
        <div className="jumbotron">
            <div className="container">
                <h2 className="cartTitle">Shopping Cart</h2>
                <div className="cart-table">
                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th className="col-sm-7">Product</th>
                                <th className="col-sm-2">Quantity</th>
                                <th className="col-sm-2">Total</th>
                                <th className="col-sm-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                           {cart.map((ca) => {
                            return(
                                <tr>
                                    <td className="col-sm-7">
                                        <div>
                                            <div className="thumbnail col-lg-2">
                                                <img src={Logo} />
                                            </div>
                                            <div className="miniDetail col-lg-7">
                                                <div className="miniBrand">{ca.product.brand}</div>
                                                <div className="miniTitle">{ca.product.title}</div>
                                                <div className="miniPrice">{ca.product.color}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="col-sm-2">
                                        <clickable-num qty={ca.quantity}></clickable-num>
                                    </td>
                                    <td className="col-sm-2">
                                        <div className="miniPrice">{ca.product.price}</div>
                                    </td>
                                    <td className="col-sm-2">
                                       <RemoveFromCart product={ca.product} /> 
                                    </td>
                                </tr> 
                            )                          
                      })}
                        </tbody>
                    </table>
                    <hr />
                    <div className="cartDesciption">
                        <div>cart overview</div>
                    </div>
                    <hr />
                    <Link to="/"><button className="viewButton">CONTINUE SHOPPING</button></Link>
                    <button className="checkoutButton">CHECKOUT</button>
                </div>
            </div>
        </div>
    )}  
}

function mapStateToProps(state, ownProps){   
    return {
        cart: state.cart
    };
}

CartPage.propTypes = {
    product: PropTypes.object.isRequired
}

export default connect(mapStateToProps,()=>{})(CartPage);