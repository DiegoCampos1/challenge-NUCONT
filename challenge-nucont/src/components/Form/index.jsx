import React, { useState, useEffect } from 'react';
import saveToLocalStorage from '../../service/localstorage';

function Form() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState();
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [disable, setDissable] = useState(true);

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
    return saveToLocalStorage(`${name} ${lastName}`, userData);
  };

  return (
    <div>
      <h3>Fale agora com nossos consultores!</h3>
      <p>Conheça a Consultoria para Contadores e garanta uma vaga exclusiva na Imersão Nucont</p>
      <form>
        <input type="text" placeholder="Nome" onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="SobreNome" onChange={(e) => setLastName(e.target.value)} />
        <input type="number" placeholder="Idade" onChange={(e) => setAge(e.target.value)} />
        <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
        <input
          type="text"
          placeholder="Telefone: (__)xxxx-xxxx"
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="button" onClick={() => handleregister()} disabled={disable}>
          QUERO ACOMPANHAR A SÉRIE
        </button>
      </form>
    </div>
  );
}

export default Form;
