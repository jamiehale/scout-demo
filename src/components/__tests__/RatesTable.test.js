import React from 'react';
import { shallow } from 'enzyme';
import RatesTable from '../RatesTable';
import TableRow from '../TableRow';

describe('<RatesTable />', () => {
  let wrapper;

  const sampleRates = [
    { currency: 'CAD', rate: 1 },
    { currency: 'JMP', rate: 2 },
    { currency: 'OPP', rate: 3 },
  ];

  beforeEach(() => {
    wrapper = shallow(<RatesTable rates={sampleRates} />);
  });

  it('renders one row per passed rate', () => {
    expect(wrapper.find(TableRow)).toHaveLength(3);
  });

  it('passes currencies in order to rows', () => {
    wrapper.find(TableRow).forEach((row, i) => {
      expect(row.props().currency).toBe(sampleRates[i].currency);
      expect(row.props().rate).toBe(sampleRates[i].rate);
    });
  });
});
