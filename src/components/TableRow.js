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
    <TD align="left">{currency}</TD>
    <TD align="right">{rate}</TD>
  </tr>
);

export default TableRow;
