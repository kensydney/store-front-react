import React from 'react';
import { shallow} from 'enzyme';
import MiniCart from '../../src/components/cart/miniCart';

describe('MiniCart (Snapshot)', () => {
  it('Minicart renders', () => {
    const component = shallow(<MiniCart />);    
    expect(component).toMatchSnapshot();
  });
});