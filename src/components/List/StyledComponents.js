import styled from 'styled-components';

export const Elipse = styled.div`
  min-width: 25px;
  height: 25px;
  background: #fbb700;
  border-radius: 50%;
  margin-right: 5px;

`;

export const ContainerList = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30vh;

  @media ( max-width : 800px ) {
    margin: 0 5vh;
  }
`;

export const Paragraph = styled.p`
  font-size: 18px;
  line-height: 22px;

  @media ( max-width : 800px ) {
    font-size: 14px;
    line-height: 17px;
  }
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 29px;
  line-height: 35px;
  color: #063254;
  margin-left: 30vh;

  @media ( max-width : 800px ) {
    font-size: 24px;
    line-height: 29px;
    margin-left: 5vh;
  }
`;
