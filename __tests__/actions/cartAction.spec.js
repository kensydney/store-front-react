import * as actions from '../../src/actions/cartActions';

describe('actions', () => {
  describe('addToCart()', () => {
    it('should call dispatch from the thunk action', () => {
      const dispatch = jest.fn();

      let testObj = {
          product: {
            "title": "Blue Stripe Stoneware Plate",
            "brand": "Kiriko",
            "price": 40,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
            "image": "blue-stripe-stoneware-plate.jpg"
          },
          quantity: 1
      }

      const testAction = actions.addToCart(testObj.product, testObj.quantity);

      console.log(testAction);
    });
  })
});
