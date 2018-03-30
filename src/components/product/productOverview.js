import React from 'react'
import PropTypes from 'prop-types';
const images = require.context('../../../images');
import AddToCart from '../cart/addToCart';
import {Link} from 'react-router';

class ProductOverview extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          isMouseInside: false
      }
      this.mouseEnter = this.mouseEnter.bind(this);
      this.mouseLeave = this.mouseLeave.bind(this);
  }

  mouseEnter(){
    this.setState({ isMouseInside: true });
  }

  mouseLeave(){
    this.setState({ isMouseInside: false });
  }

  render(){
    const {product} = this.props;
    let img_src = images(`./${product.image}`);
    return (
      <div className="product-preview" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
        <a><img src={img_src} className="img-responsive" /> 
          {this.state.isMouseInside ?  
            <div>
            <Link to={'/details/' + product.title} class="detail-link">
            <span>VIEW DETAILS</span>
            </Link>
            <AddToCart quantity="1" product={product} />
            </div>: null}                      
        </a>
        <h6>{product.brand}</h6>
        <p>{product.title}</p>
        <h6>{product.price}</h6>
      </div>
  );
  }
  
}

ProductOverview.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductOverview;