import React from 'react';
import ThanksHeader from '../../components/ThanksHeader';
// import Header from '../../components/Header';
// import YellowBaner from '../../components/YellowBaner';
// import ListComponent from '../../components/ListComponent';
// import { contadorList, serieList } from '../../service/itemsList';
import {
  ThanksPageContainer,
  Title,
  SizeView,
  Button,
  Button2,
  TelegramContainer,
  Image,
} from './StyledComponents';
// import AuthorBaner from '../../components/AuthorBaner';
// import RegisterBaner from '../../components/RegisterBaner';
import telegramLogo from '../../images/telegramLogo.png';

function ThanksPage() {
  return (
    <div>
      <ThanksHeader />
      <ThanksPageContainer>
        <SizeView background="white">
          <Title>
            A Nucont se sente responsável por te ajudar não só com estratégias e ações de
            emergência, mas também para te deixar preparado para um novo normal que viveremos.
            Conheça o Plano de retomada!
          </Title>
          <Button type="button">FALAR COM CONSULTOR</Button>
        </SizeView>
        <SizeView>
          <Title>
            QUER FAZER PARTE DO CANAL OFICIAL DA NUCONT COM NÓTICAS, DICAS E CONTEÚDOS EXCLUSIVOS
            VOLTADOS A CONTABILIDADE CONSULTIVA?
          </Title>
          <TelegramContainer>
            <Image src={telegramLogo} alt="Logo do Telegram" />
            <Button2 type="button">CONECTE - SE COM A GENTE: TELEGRAM</Button2>
          </TelegramContainer>
        </SizeView>
      </ThanksPageContainer>
    </div>
  );
}

export default ThanksPage;
