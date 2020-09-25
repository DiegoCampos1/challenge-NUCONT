import styled from 'styled-components';

export const ThanksPageContainer = styled.div`
  background: linear-gradient(180deg, #ffb700 99.99%, #141414 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
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
