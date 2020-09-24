import styled from 'styled-components';

export const Hr = styled.hr`
  border-top: 3px dotted #ffe200;
  width: ${(props) => (props.size)};
  align-items: center;
  margin-top: ${(props) => (props.margintop)};
`;
