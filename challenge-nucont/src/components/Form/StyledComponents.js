import styled from 'styled-components';

export const Title = styled.h3`
  font-family: Montserrat, Roboto, Arial, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
  text-align: center;
  color: #ffe200;
`;

export const UserForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Paragraph = styled.p`
  font-family: Montserrat, Roboto, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 107%;
  text-align: center;
  color: ${(props) => (props.primary ? 'black' : 'white')};
`;

export const Input = styled.input`
  font-family: Montserrat, Roboto, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 107%;
  background: white;
  border: 2px solid #99b6cc;
  box-sizing: border-box;
  border-radius: 4px;
  margin: 5px 0;
  height: 35.16px;
`;

export const Button = styled.button`
  background: #ffb700;
  border: 0;
  border-radius: 42px;
  color: white;
  cursor: pointer;
  font-family: Montserrat, Roboto, Arial, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  margin: 5px 0;
  padding: 10px 25px;
  text-align: center;
`;
