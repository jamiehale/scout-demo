import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid black;
  padding: 32px;
`;

const Table = styled.table`
  border-collapse: collapse;
`;

const TD = styled.td`
  text-align: ${({ align }) => align || 'left'};
`;

const TH = styled.th`
  text-align: ${({ align }) => align || 'left'};
  border-bottom: 1px solid #000;
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

const RatesTable = ({
  className,
  rates,
}) => {
  const rows = rates.map(row => (
    <TableRow
      key={row.currency}
      currency={row.currency}
      rate={row.rate}
    />
  ));

  return (
    <Container className={className}>
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