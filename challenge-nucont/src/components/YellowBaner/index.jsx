import React from 'react';
import { Title, Paragraph, Button, YellowBanerCountainer } from './StyledComponents';

function YellowBaner() {
  return (
    <YellowBanerCountainer>
      <Title>COMO SER ESSENCIAL NA TOMADA DE DECISÃO DAS EMPRESAS?</Title>
      <Paragraph>
        Responder essa pergunta pode ser mais fácil do que parece: A Consultoria Contábil é sua
        aliada para analisar a real situação das empresas. No entanto, para colocar em prática, você
        precisa de informações e dedicação.
        <br />
      </Paragraph>
      <Paragraph><strong>Vamos conversar a respeito?</strong></Paragraph>
      <Button>QUERO ASSITIR A SÉRIE: CONSULTORIA CONTÁBIL NA PRÁTICA</Button>
    </YellowBanerCountainer>
  );
}

export default YellowBaner;
