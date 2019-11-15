import React from 'react';
import { shallow } from 'enzyme';
import useRates from '../hooks/rates';
import App from '../App';

jest.mock('../hooks/rates');

describe('<App />', () => {
  let wrapper;

  describe('when loading', () => {
    beforeEach(() => {
      useRates.mockImplementation(() => ({ rates: [], isLoading: true }));
      wrapper = shallow(<App />);
    });

    it('shows the load rates button', () => {
      expect(wrapper.find('[data-testid="load-button"]')).toHaveLength(1);
    });

    it('passes the isLoading flag to the load rates button', () => {
      expect(wrapper.find('[data-testid="load-button"]').props().isLoading).toBe(true);
    });
  });

  describe('when no rates have been loaded', () => {
    beforeEach(() => {
      useRates.mockImplementation(() => ({ rates: [], isLoading: false }));
      wrapper = shallow(<App />);
    });

    it('shows the load rates button', () => {
      expect(wrapper.find('[data-testid="load-button"]')).toHaveLength(1);
    });

    it('passes the isLoading flag to the load rates button', () => {
      expect(wrapper.find('[data-testid="load-button"]').props().isLoading).toBe(false);
    });

    it('does not show the rates table', () => {
      expect(wrapper.find('[data-testid="rates-table"]')).toHaveLength(0);
    });

    it('does not show the error modal', () => {
      expect(wrapper.find('[data-testid="error-modal"]')).toHaveLength(0);
    });
  });

  describe('when rates have been loaded', () => {
    beforeEach(() => {
      useRates.mockImplementation(() => ({ rates: [1, 2, 3], isLoading: false }));
      wrapper = shallow(<App />);
    });

    it('shows the load rates button', () => {
      expect(wrapper.find('[data-testid="load-button"]')).toHaveLength(1);
    });

    it('shows the rates table', () => {
      expect(wrapper.find('[data-testid="rates-table"]')).toHaveLength(1);
    });

    it('does not show the error modal', () => {
      expect(wrapper.find('[data-testid="error-modal"]')).toHaveLength(0);
    });
  });

  describe('when an error has occurred', () => {
    beforeEach(() => {
      useRates.mockImplementation(() => ({ rates: [], isLoading: false, error: 'Bad stuff' }));
      wrapper = shallow(<App />);
    });

    it('shows the load rates button', () => {
      expect(wrapper.find('[data-testid="load-button"]')).toHaveLength(1);
    });

    it('does not show the rates table', () => {
      expect(wrapper.find('[data-testid="rates-table"]')).toHaveLength(0);
    });

    it('shows the error modal', () => {
      expect(wrapper.find('[data-testid="error-modal"]')).toHaveLength(1);
    });
  });
});
