import styled from 'styled-components';

export const Title = styled.h3`
  color: #ffe200;
  font-size: 18px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;

  @media ( max-width : 800px ) {
    font-size: 18px;
    line-height: 16px;
  }
`;

export const UserForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Paragraph = styled.p`
  color: ${(props) => (props.primary ? 'black' : 'white')};
  font-size: 15px;
  line-height: 107%;
  text-align: center;
`;

export const Input = styled.input`
  background: white;
  border-radius: 4px;
  border: 2px solid #99b6cc;
  box-sizing: border-box;
  font-family: Montserrat, Roboto, Arial, sans-serif;
  font-size: 15px;
  font-style: normal;
  height: 35.16px;
  line-height: 107%;
  margin: 5px 0;
`;

export const Button = styled.button`
  background: #ffb700;
  border-radius: 42px;
  border: 0;
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

export const ContainerForm = styled.div`
  @media (max-width: 800px) {
    font-size: 18px;
    line-height: 16px;
    background: black;
    width: 320px;
    height: 400px;
    margin-left: -50px;
    padding: 20%;
  }
`;
