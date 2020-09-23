import styled from 'styled-components';
import imageHeader from '../../images/fernandaRochaBaner.png';

export const Title = styled.h3`
  font-family: Montserrat, Roboto, Arial, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 29px;
  line-height: 35px;
  text-align: center;
  color: #ffe200;
`;

export const Paragraph = styled.p`
  font-family: Montserrat, Roboto, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: white;
`;

export const HeaderContainer = styled.div`
  background-image: url(${imageHeader});

  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 550px;
  margin: 0;
`;

export const Author = styled.p`
  font-family: Montserrat, Roboto, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: white;
  margin-top: 142px;
`;

export const SizeView = styled.div`
  display: flex;
  width: 70%;
  padding-left: 7%;
`;

export const View = styled.div`
  position: absolute;
  width: 100%;
  height: 587px;
  left: -22px;
  top: 0;
`;

export const SizeFlex = styled.div`
  width: ${(props) => (props.size)};
  margin: 0 15px;
`;
