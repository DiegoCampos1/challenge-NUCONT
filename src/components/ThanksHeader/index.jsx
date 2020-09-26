import React from 'react';
import {
  Title,
  Paragraph,
  HeaderThanksContainer,
  SizeView,
} from './StyledComponents';

function ThanksHeader() {
  return (
    <div>
      <HeaderThanksContainer>
        <SizeView>
          <Title>OBRIGADO!</Title>
          <Paragraph fontsize="18px" fontheight="22px">
            <strong>Fique Ligado!</strong>
            {' '}
            Você receberá em alguns instantes um e-mail da Fernanda Rocha com o acesso
            para acompanhar a série. toda semana vamos enviar o link da Consultoria Contábil com o
            tema que será abordado
          </Paragraph>
          <Paragraph fontsize="14px" fontheight="17px" fontsizemedia="12px" fontheightmedia="15px">
            Por favor, confira também a aba de promoções e sua caixa de spam ou lixo eletrônico, em
            alguns casos o e-mail chega nessas outras caixas.
          </Paragraph>
        </SizeView>
      </HeaderThanksContainer>
    </div>
  );
}

export default ThanksHeader;
