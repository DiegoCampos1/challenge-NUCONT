import styled from 'styled-components';

export const Title = styled.h3`
  font-family: Montserrat, Roboto, Arial, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 29px;
  line-height: 35px;
  text-align: center;
  color: #FFB700;
`;

export const Paragraph = styled.span`
  font-family: Montserrat, Roboto, Arial, sans-serif;
  font-style: normal;
  font-weight: ${(props) => (props.weight)};
  font-size: 18px;
  line-height: 143.4%;
  color: ${(props) => (props.color)};
`;

export const SizeFlex = styled.div`
  width: ${(props) => (props.size)};

`;

export const AuthorBanerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 550px;
  height: 100vh;
  margin: 0;
`;

export const SizeView = styled.div`
  width: 80%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.div`
  width: 412px;
  height: 364px;
`;
