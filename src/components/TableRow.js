import React from 'react';
import styled from 'styled-components';

const TD = styled.td`
  text-align: ${({ align }) => align || 'left'};
`;

const TableRow = ({
  currency,
  rate,
}) => (
  <tr>
    <TD
      data-testid="currency-cell"
      align="left"
    >{currency}</TD>
    <TD
      data-testid="rate-cell"
      align="right"
    >{rate}</TD>
  </tr>
);

export default TableRow;
