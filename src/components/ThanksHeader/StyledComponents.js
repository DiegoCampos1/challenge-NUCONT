import styled from 'styled-components';
import imageHeader from '../../images/fernandaRochaBaner.png';

export const Title = styled.h3`
  font-weight: 700;
  font-size: 29px;
  line-height: 35px;
  color: #ffe200;
  @media ( max-width : 800px ) {
    font-size: 24px;
    line-height: 29px;
  }
`;

export const Paragraph = styled.p`
  font-size: ${(props) => (props.fontsize)};
  line-height: ${(props) => (props.fontheight)};
  color: white;

  @media ( max-width : 800px ) {
    font-size: ${(props) => (props.fontsizemedia)};
    line-height: ${(props) => (props.fontheightmedia)};
  }
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

  @media ( max-width : 800px ) {
    width: 500;
    height: 300px;
    background-size: 100% 100%;
  }
`;

export const SizeView = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding-left: 1%;

  @media ( max-width : 800px ) {
    width: 60%;
    background-size: 40% 100%;
    margin-left: 20px;
    align-items: flex-start;
  }
`;
