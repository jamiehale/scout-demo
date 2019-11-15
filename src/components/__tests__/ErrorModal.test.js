import React from 'react';
import { shallow } from 'enzyme';
import ErrorModal from '../ErrorModal';
import Button from '../Button';

describe('<ErrorModal />', () => {
  it('puts the error message in a p', () => {
    const wrapper = shallow(<ErrorModal message="Something went wrong" />);
    expect(wrapper.find('p').text()).toBe('Something went wrong');
  });

  it('calls onClose when OK button clicked', () => {
    const handleClose = jest.fn();
    const wrapper = shallow(<ErrorModal onClose={handleClose} />);
    wrapper.find(Button).simulate('click');
    expect(handleClose).toHaveBeenCalled();
  });
});
