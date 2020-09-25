import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

const userTest = {
  name: 'Diego',
  lastName: 'Campos',
  age: '31',
  email: 'diegodiko05@gmail.com',
  phone: '97339-4582',
};

const loadFromLocalStorage = (key) => {
  if (key === 'userData') return JSON.parse(localStorage.getItem(key));

  return localStorage.getItem(key);
};

test('renders a reading with the text `CONSULTORIA CONTÁBIL`', () => {
  const { getAllByText } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  const heading = getAllByText(/CONSULTORIA CONTÁBIL NA PRÁTICA/i);
  expect(heading.length).toBe(3);
});

describe('Testes do App.js', () => {
  afterEach(cleanup);

  test('Ao carregar a aplicação no caminho de URL “/”, a página principal da CONSULTORIA CONTÁBIL deve ser mostrada', () => {
    const { history } = renderWithRouter(<App />);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  test('Preenchendo o formulario corretamente e cadastrando os dados, deve ser redirecionado para a pagina seguinte e salvar os dados no localStorage', () => {
    const { getAllByText } = renderWithRouter(<App />);

    const inputName = document.querySelector('input[name="Nome"]');
    fireEvent.change(inputName, { target: { value: userTest.name } });

    const inputSobrenome = document.querySelector('input[name="Sobrenome"]');
    fireEvent.change(inputSobrenome, { target: { value: userTest.lastName } });

    const inputIdade = document.querySelector('input[name="Idade"]');
    fireEvent.change(inputIdade, { target: { value: userTest.age } });

    const inputIEmail = document.querySelector('input[name="Email"]');
    fireEvent.change(inputIEmail, { target: { value: userTest.email } });

    const inputPhone = document.querySelector('input[name="Phone"]');
    fireEvent.change(inputPhone, { target: { value: userTest.phone } });

    fireEvent.click(getAllByText(/QUERO ACOMPANHAR A SÉRIE/)[0]);
    const { pathname } = window.location;
    expect(pathname).toBe('/obrigado');
    expect(loadFromLocalStorage('userData')).toEqual(userTest);
  });
});
