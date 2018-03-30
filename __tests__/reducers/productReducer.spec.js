import reducer from '../../src/reducers/productReducer';

describe('Product Reducer', () => {
  it('should handle LOAD_PRODUCTS_SUCCESS', () => {
    const state = {
      products: []
    };

    const action = {
        type: 'LOAD_PRODUCTS_SUCCESS',       
        products: [{
        "title": "Blue Stripe Stoneware Plate",
        "brand": "Kiriko",
        "price": 40,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
        "image": "blue-stripe-stoneware-plate.jpg"
        }]          
    };

    expect(reducer(state.products, action)[0])
      .toMatchObject({
        "title": "Blue Stripe Stoneware Plate",
        "brand": "Kiriko",
        "price": 40,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
        "image": "blue-stripe-stoneware-plate.jpg"
      });
  });
});
