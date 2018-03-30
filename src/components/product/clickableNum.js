import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as quantityActions from '../../actions/quantityActions';


class ClickableNum extends React.Component{
    constructor(props)
    {
        super(props); 
        this.setState({quantity: 0});   
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if (this.props.quantity != nextProps.quantity) {
            this.setState({quantity: Object.assign({}, nextProps.quantity)});
        }
    }

    increment(){
        this.props.actions.quantityAdd();
    }

    decrement(){
        this.props.actions.quantityMinus();
    }

    render(){
        return(
            <div className="clickable-num">
                <div className="clickable-container">
                    <input type='text' className='quantity' value={this.props.quantity} disabled />
                    <button onClick={this.increment} className='qtyplus'>+</button>
                    <button onClick={this.decrement} className='qtyminus' disabled={this.props.quantity == 0}>-</button> 
                </div>  
            </div>
        )                    
        
    }
}

ClickableNum.propTypes = {
    quantity: PropTypes.number.isRequired
}

function mapStateToProps(state, ownProps){   
    return {
        quantity: state.quantity
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(quantityActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClickableNum)