import styled from 'styled-components';
import imageHeader from '../../images/fernandaRochaBaner.png';

export const Title = styled.h3`
  font-weight: 700;
  font-size: 29px;
  line-height: 35px;
  color: #ffe200;
`;

export const Paragraph = styled.p`
  font-size: ${(props) => (props.fontsize)};
  line-height: ${(props) => (props.fontheight)};
  color: white;
`;

export const HeaderThanksContainer = styled.div`
  background-image: url(${imageHeader});
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  height: 50vh;
  margin: 0;
`;

export const SizeView = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding-left: 1%;
`;
