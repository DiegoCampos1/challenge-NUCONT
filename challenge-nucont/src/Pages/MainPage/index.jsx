import React from 'react';
import Header from '../../components/Header';
import YellowBaner from '../../components/YellowBaner';
import ListComponent from '../../components/ListComponent';
import { contadorList, serieList } from '../../service/itemsList';

function MainPage() {
  console.log(contadorList.items)
  return (
    <div>
      <Header />
      <YellowBaner />
      <ListComponent title={contadorList.title} list={contadorList.items} />
      <ListComponent title={serieList.title} list={serieList.items} />
    </div>
  );
}

export default MainPage;
