import reducer from '../../src/reducers/cartReducer';

describe('Cart Reducer', () => {
  it('should handle ADD_TO_CART', () => {
    const state = {
      cart: []
    };

    const action = {
        type: 'ADD_TO_CART',       
        product: {
        "title": "Blue Stripe Stoneware Plate",
        "brand": "Kiriko",
        "price": 40,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
        "image": "blue-stripe-stoneware-plate.jpg"
        },
        quantity: 1            
    };

    expect(reducer(state.cart, action)[0].product)
      .toMatchObject({
        "title": "Blue Stripe Stoneware Plate",
        "brand": "Kiriko",
        "price": 40,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
        "image": "blue-stripe-stoneware-plate.jpg"
      });
  });
});
