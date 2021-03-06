import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import ReactGA from 'react-ga';

import saveToLocalStorage from '../../service/localstorage';
import {
  ContainerForm,
  Title,
  UserForm,
  Paragraph,
  Input,
  Button,
} from './StyledComponents';

function Form({ color, backgroundmedia }) {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState();
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [disable, setDissable] = useState(true);
  const [redirectThanks, setRedirectThanks] = useState(false);

  const eventSend = () => ReactGA.event({
    category: 'User',
    action: 'Send Form',
  });

  const validateEmail = (emailAdress) => {
    const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (emailAdress.match(regexEmail)) {
      return true;
    }
    return false;
  };

  const validatePhone = (phoneNunber) => {
    const regexPhone = /((\(?\d{2}\)?\s)?(\d{4,5}-\d{4}))/g;
    if (phoneNunber.match(regexPhone)) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (validateEmail(email) && validatePhone(phone)) {
      setDissable(false);
    }
  }, [email, phone]);

  const handleregister = () => {
    const userData = {
      name,
      lastName,
      age,
      email,
      phone,
    };
    eventSend();
    saveToLocalStorage(userData);
    return setRedirectThanks(true);
  };

  return redirectThanks ? (
    <Redirect to="/obrigado" />
  ) : (
    <ContainerForm backgroundmedia={backgroundmedia}>
      <Title>Fale agora com nossos consultores!</Title>
      <Paragraph color={color}>
        Conheça a Consultoria para Contadores e garanta uma vaga exclusiva na
        <strong> Imersão Nucont</strong>
      </Paragraph>
      <UserForm>
        <Input name="Nome" type="text" placeholder="Nome" onChange={(e) => setName(e.target.value)} />
        <Input name="Sobrenome" type="text" placeholder="Sobrenome" onChange={(e) => setLastName(e.target.value)} />
        <Input name="Idade" type="number" placeholder="Idade" onChange={(e) => setAge(e.target.value)} />
        <Input name="Email" type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
        <Input
          type="text"
          name="Phone"
          placeholder="Telefone: (__)xxxx-xxxx"
          onChange={(e) => setPhone(e.target.value)}
        />
        <Button type="button" onClick={() => handleregister()} disabled={disable}>
          QUERO ACOMPANHAR A SÉRIE
        </Button>
      </UserForm>
    </ContainerForm>
  );
}

Form.propTypes = {
  backgroundmedia: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Form;
