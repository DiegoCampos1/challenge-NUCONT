import styled from 'styled-components';

export const Title = styled.h3`
  font-family: Montserrat, Roboto, Arial, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 29px;
  line-height: 35px;
  text-align: center;
  color: #ffb700;
  margin-top: 0;
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
  margin-left: 10px;
`;

export const AuthorBanerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
`;

export const SizeView = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100%;
`;
