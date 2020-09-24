import React from 'react';
import { Title, Paragraph, AuthorBanerContainer, SizeFlex, SizeView } from './StyledComponents';
import fernandaRocha from '../../images/fernandaRocha.png';

function AuthorBaner() {
  return (
    <AuthorBanerContainer>
      <Title>QUEM É FERNANDA ROCHA?</Title>
      <SizeView>
        <SizeFlex size="40%">
          <img src={fernandaRocha} alt="Foto Fernanda Rocha" />
        </SizeFlex>
        <SizeFlex size="54%">
          <Paragraph weight="700" color="#ffb700">
            Fala galera, beleza?
          </Paragraph>
          <br />
          <Paragraph weight="400" color="Black">
            Eu sou a Fernanda Rocha,
            <Paragraph weight="400" color="#ffb700">
              {' '}
              fundadora da Nucont e do Movimento Contabilidade Sem Chatice.{' '}
            </Paragraph>
            Como empresária contábil eu já estive no fundo do poço, a ponto de largar tudo. Até que
            através da Contabilidade Consultiva me reergui e achei uma maneira de entregar mais
            valor para as empresas e com isso fui mais valorizada.
            <Paragraph weight="400" color="#ffb700">
              {' '}
              Cansada de ser tratada como mal necessário,
              {' '}
            </Paragraph>
            decidi fazer diferente. Corri atrás e resolvi encarar de frente o desafio de aplicar na
            prática a verdadeira contabilidade. Não foi fácil, muitas vezes me decepcionei, mas
            <Paragraph weight="400" color="#ffb700">
              me coloquei na missão de mudar para sempre a forma com que Contadores e Empresas se
              relacionam.
              {' '} 
            </Paragraph>
            Hoje tenho um compromisso com a classe contábil de replicar tudo o que eu aprendi nessa
            jornada e garantir que o contador salve empresas e ajude os empresários na tomada de
            decisões. Vem comigo!
          </Paragraph>
        </SizeFlex>
      </SizeView>
    </AuthorBanerContainer>
  );
}

export default AuthorBaner;
