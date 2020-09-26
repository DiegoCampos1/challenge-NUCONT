import styled from 'styled-components';

export const ThanksPageContainer = styled.div`
  background: linear-gradient(180deg, #ffb700 99.99%, #141414 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;

  @media ( max-width : 800px ) {
    height: 500px;
    justify-content: flex-start;
  }
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #063254;
  text-align: center;
  text-transform: uppercase;
  width: 70%;
`;

export const SizeView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.background};
  margin-top: 10px;
  width: 100%;

  @media ( max-width : 800px ) {
    display: ${(props) => props.display};
  }
`;

export const Button = styled.button`
  font-family: Montserrat, Roboto, Arial, sans-serif;
  background: ${(props) => props.background};
  border: 0;
  border-radius: 42px;
  color: white;
  cursor: pointer;
  font-size: ${(props) => props.size};
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  margin: ${(props) => props.margin};
  padding: 10px 25px;
  text-align: center;

  @media ( max-width : 800px ) {
    font-size: 16px;
    line-height: 16px;
    align-self: start;
  }
`;

export const TelegramContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;

  @media ( max-width : 800px ) {
    padding: 20px;
  }
`;

export const Image = styled.img`
  width: 178px;
  height: 120px;
  z-index: 1;

  @media ( max-width : 800px ) {
    margin-left: -30px;
  }
`;
