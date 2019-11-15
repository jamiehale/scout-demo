import styled from 'styled-components';

const Button = styled.button`
  padding: 8px 16px;
  min-width: ${({ minWidth }) => minWidth || '140px'};
  font-size: 1rem;
  border-radius: 6px;
  background: #085a9d;
  color: #fff;
  :disabled {
    background: #2a7cbf;
    colour: #aaa;
  }
`;

export default Button;
