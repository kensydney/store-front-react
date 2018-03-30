import React from 'react';
import PropTypes from 'prop-types';
import ProductOverView from './productOverview';

const ProductList = ({products}) => {
    return(
      <div className="galleryContainer">
        {products.map(product =>
              <ProductOverView key={product.title} product={product}/>
        )}
      </div>
    )
}

ProductList.propTypes = {
    products: PropTypes.array.isRequired 
}

export default ProductList;