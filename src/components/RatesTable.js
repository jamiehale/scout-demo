import React from 'react';
import styled from 'styled-components';
import TableRow from './TableRow';

const Container = styled.div`
  border: 1px solid black;
  padding: 32px;
`;

const Table = styled.table`
  border-collapse: collapse;
`;

const TH = styled.th`
  text-align: ${({ align }) => align || 'left'};
  border-bottom: 1px solid #000;
`;

const RatesTable = ({
  rates,
  ...props,
}) => {
  const rows = rates.map(row => (
    <TableRow
      key={row.currency}
      currency={row.currency}
      rate={row.rate}
    />
  ));

  return (
    <Container {...props}>
      <Table>
        <thead>
          <tr>
            <TH align="left">Currency</TH>
            <TH align="right">Rate</TH>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </Table>
    </Container>
  );
};

export default RatesTable;
