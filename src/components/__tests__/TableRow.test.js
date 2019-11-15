import React from 'react';
import { shallow } from 'enzyme';
import TableRow from '../TableRow';

describe('<TableRow />', () => {
  it('renders a row', () => {
    const wrapper = shallow(<TableRow />);
    expect(wrapper.find('tr')).toHaveLength(1);
  });

  describe('with props', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<TableRow currency="CAD" rate="3.1415" />);
    });

    it('puts the currency in a cell', () => {
      expect(wrapper.find('[data-testid="currency-cell"]').text()).toBe('CAD');
    });

    it('puts the rate in a cell', () => {
      expect(wrapper.find('[data-testid="rate-cell"]').text()).toBe('3.1415');
    });
  });
});
