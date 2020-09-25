import React from 'react';
import Header from '../../components/Header';
import YellowBaner from '../../components/YellowBaner';
import ListComponent from '../../components/ListComponent';
import { contadorList, serieList } from '../../service/itemsList';
import { Hr, Title } from './StyledComponents';
import AuthorBaner from '../../components/AuthorBaner';
import RegisterBaner from '../../components/RegisterBaner';

function MainPage() {
  return (
    <div>
      <Header />
      <YellowBaner />
      <ListComponent title={contadorList.title} list={contadorList.items} />
      <br />
      <Hr size="50%" />
      <ListComponent title={serieList.title} list={serieList.items} />
      <Hr size="40%" margintop="10vh" />
      <AuthorBaner />
      <Hr size="40%" margintop="5vh" />
      <RegisterBaner />
      <Hr size="40%" margintop="10vh" />
      <Title>ESTAMOS JUNTOS NESSA</Title>
    </div>
  );
}

export default MainPage;
