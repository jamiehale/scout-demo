import React from 'react';
import { shallow } from 'enzyme';
import LoadButton from '../LoadButton';
import Button from '../Button';

describe('<LoadButton />', () => {
  it('renders a Button', () => {
    const wrapper = shallow(<LoadButton />);
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  it('calls onLoadRates prop on click', () => {
    const handleLoadRates = jest.fn();
    const wrapper = shallow(<LoadButton onLoadRates={handleLoadRates} />);
    wrapper.simulate('click');
    expect(handleLoadRates).toHaveBeenCalled();
  });

  describe('while not loading', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<LoadButton isLoading={false} />);
    });

    it('shows Load Rates', () => {
      expect(wrapper.find(Button).text()).toBe('Load Rates');
    });

    it('is enabled', () => {
      expect(wrapper.find(Button).prop('disabled')).toBe(false);
    });
  });

  describe('while loading', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<LoadButton isLoading={true} />);
    });

    it('shows Loading...', () => {
      expect(wrapper.find(Button).text()).toBe('Loading...');
    });

    it('is disabled', () => {
      expect(wrapper.find(Button).prop('disabled')).toBe(true);
    });
  });
});
