import styled from 'styled-components';

export const Hr = styled.hr`
  border-top: 3px dotted #ffe200;
  width: ${(props) => (props.size)};
  align-items: center;
  margin-top: ${(props) => (props.margintop)};
`;

export const Title = styled.h3`
  font-family: Montserrat, Roboto, Arial, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 29px;
  line-height: 35px;
  text-align: center;
  color: #ffb700;
  margin-top: 5vh;
`;
