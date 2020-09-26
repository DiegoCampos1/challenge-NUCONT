import React from 'react';
import { Paragraph, RegisterBanerContainer, SizeFlex } from './StyledComponents';
import Form from '../Form';

function RegisterBaner() {
  return (
    <RegisterBanerContainer>
      <SizeFlex size="32%" sizemedia="70%">
        <Paragraph>
          A Consultoria Contábil na Prática é um série de vídeo gratuita. Será realizada durante o
          mês de Julho e para ter acesso exclusivo, preencha o formulário ao lado!
        </Paragraph>
      </SizeFlex>
      <SizeFlex size="27%" sizemedia="100%">
        <Form color="primary" backgroundmedia="white" />
      </SizeFlex>
    </RegisterBanerContainer>
  );
}

export default RegisterBaner;
