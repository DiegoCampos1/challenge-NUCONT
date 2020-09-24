import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import saveToLocalStorage from '../../service/localstorage';
import {
  Title,
  UserForm,
  Paragraph,
  Input,
  Button,
} from './StyledComponents';

function Form({ color }) {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState();
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [disable, setDissable] = useState(true);
  const [redirectThanks, setRedirectThanks] = useState(false);

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
    saveToLocalStorage(userData);
    return setRedirectThanks(true);
  };

  return redirectThanks ? (
    <Redirect to="/obrigado" />
  ) : (
    <div>
      <Title>Fale agora com nossos consultores!</Title>
      <Paragraph primary={color}>
        Conheça a Consultoria para Contadores e garanta uma vaga exclusiva na
        <strong> Imersão Nucont</strong>
      </Paragraph>
      <UserForm>
        <Input type="text" placeholder="Nome" onChange={(e) => setName(e.target.value)} />
        <Input type="text" placeholder="SobreNome" onChange={(e) => setLastName(e.target.value)} />
        <Input type="number" placeholder="Idade" onChange={(e) => setAge(e.target.value)} />
        <Input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
        <Input
          type="text"
          placeholder="Telefone: (__)xxxx-xxxx"
          onChange={(e) => setPhone(e.target.value)}
        />
        <Button type="button" onClick={() => handleregister()} disabled={disable}>
          QUERO ACOMPANHAR A SÉRIE
        </Button>
      </UserForm>
    </div>
  );
}

export default Form;
