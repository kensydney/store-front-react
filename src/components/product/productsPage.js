import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ProductList from './productList';
import Header from '../../../images/plates-header.jpg';

class ProductsPage extends React.Component {
  constructor(props){
      super(props);
  }

  render() {
      const {products} = this.props;
      return(
          <div>
            <div className="banner">
              <div className="container-fluid  image-container col-lg-12">  
                <img src={Header}/>
                <div className="category">
                    <div className="title">Plates</div>
                    <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl, sit amet mattis dolor</div>
                </div>
              </div>
            </div>
            <ProductList products={products} />
          </div>
      )
  }
}

ProductsPage.propTypes = {
    products: PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps){
    return {
        products: state.products
    };
}

export default connect(mapStateToProps)(ProductsPage);