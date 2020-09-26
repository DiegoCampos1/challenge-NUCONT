import React from 'react';
import Header from '../../components/Header';
import YellowBanner from '../../components/YellowBanner';
import ListComponent from '../../components/ListComponent';
import { contadorList, serieList } from '../../service/itemsList';
import { Hr, Title } from './StyledComponents';
import AuthorContainer from '../../components/AuthorContainer';
import Register from '../../components/Register';

function MainPage() {
  return (
    <div>
      <Header />
      <YellowBanner />
      <ListComponent title={contadorList.title} list={contadorList.items} />
      <br />
      <Hr size="50%" />
      <ListComponent title={serieList.title} list={serieList.items} />
      <Hr size="40%" margintop="10vh" />
      <AuthorContainer />
      <Hr size="40%" margintop="5vh" />
      <Register />
      <Hr size="40%" margintop="10vh" />
      <Title>ESTAMOS JUNTOS NESSA</Title>
    </div>
  );
}

export default MainPage;
