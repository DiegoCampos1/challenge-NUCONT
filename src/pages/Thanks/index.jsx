import React from 'react';
import ThanksHeader from '../../components/ThanksHeader';
import {
  ThanksPageContainer,
  Title,
  SizeView,
  Button,
  TelegramContainer,
  Image,
} from './StyledComponents';
import telegramLogo from '../../images/telegramLogo.png';

function ThanksPage() {
  return (
    <div>
      <ThanksHeader />
      <ThanksPageContainer>
        <SizeView background="white" display="none">
          <Title>
            A Nucont se sente responsável por te ajudar não só com estratégias e ações de
            emergência, mas também para te deixar preparado para um novo normal que viveremos.
            Conheça o Plano de retomada!
          </Title>
          <Button
            margin="10vh 0"
            background="linear-gradient(180deg, #ffb700 99.99%, #141414 100%)"
            size="18px"
            type="button"
          >
            FALAR COM CONSULTOR
          </Button>
        </SizeView>
        <SizeView>
          <Title>
            QUER FAZER PARTE DO CANAL OFICIAL DA NUCONT COM NÓTICAS, DICAS E CONTEÚDOS EXCLUSIVOS
            VOLTADOS A CONTABILIDADE CONSULTIVA?
          </Title>
          <TelegramContainer>
            <Image src={telegramLogo} alt="Logo do Telegram" />
            <Button margin="40px 0 40px -60px" background="#9b51e0" size="16px" type="button">
              CONECTE - SE COM A GENTE: TELEGRAM
            </Button>
          </TelegramContainer>
        </SizeView>
      </ThanksPageContainer>
    </div>
  );
}

export default ThanksPage;
