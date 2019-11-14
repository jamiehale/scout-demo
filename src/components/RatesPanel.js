import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const RatesPanel = ({
  rates,
}) => {
  const rows = (rates || []).map(row => (
    <tr>
      <td>{row.currency}</td>
      <td>{row.rate}</td>
    </tr>
  ));
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Currency</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </Container>
  );
};

export default RatesPanel;
