import styled from 'styled-components';

export const ThanksPageContainer = styled.div`
  font-family: Montserrat, Roboto, Arial, sans-serif;
  font-style: normal;
  background: linear-gradient(180deg, #ffb700 99.99%, #141414 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

export const Title = styled.h3`
  font-family: Montserrat, Roboto, Arial, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #063254;
  text-align: center;
  text-transform: uppercase;
  width: 70%;
`;

export const SizeView = styled.h3`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.background};
`;

export const Button = styled.button`
  background: linear-gradient(180deg, #ffb700 99.99%, #141414 100%);
  border: 0;
  border-radius: 42px;
  color: white;
  cursor: pointer;
  font-family: Montserrat, Roboto, Arial, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  margin: 10vh 0;
  padding: 10px 25px;
  text-align: center;
`;

export const Button2 = styled.button`
  background: #9b51e0;
  border: 0;
  border-radius: 42px;
  color: white;
  cursor: pointer;
  font-family: Montserrat, Roboto, Arial, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  margin: 40px 0 40px -60px;
  padding: 10px 25px;
  text-align: center;
  /* height: 37px; */
  /* height: 100%; */
`;

export const TelegramContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 178px;
  height: 120px;
  z-index: 1;
`;
