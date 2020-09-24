import React from 'react';
import Header from '../../components/Header';
import YellowBaner from '../../components/YellowBaner';
import ListComponent from '../../components/ListComponent';
import { contadorList, serieList } from '../../service/itemsList';
import { Hr } from './StyledComponents';

function MainPage() {
  return (
    <div>
      <Header />
      <YellowBaner />
      <ListComponent title={contadorList.title} list={contadorList.items} />
      <br />
      <Hr size="40%" />
      <ListComponent title={serieList.title} list={serieList.items} />
      <Hr size="30%" margintop="40px" />

    </div>
  );
}

export default MainPage;
