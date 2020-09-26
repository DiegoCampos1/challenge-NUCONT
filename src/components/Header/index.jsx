import React from 'react';
import {
  Title,
  Paragraph,
  HeaderContainer,
  Author,
  SizeView,
  SizeFlex,
} from './StyledComponents';
import Form from '../Form';

function Header() {
  return (
    <div>
      <HeaderContainer>
        <SizeView>
          <SizeFlex size="62%" sizemedia="70%" marginleft="10vh">
            <Title>CONSULTORIA CONTÁBIL NA PRÁTICA</Title>
            <Paragraph>
              <strong>Identifique </strong>
              situações problemáticas nas empresas através de análise de indicadores e entenda como
              fazer uma consultoria contábil eficiente. Seja o responsável por ajudar as pequenas
              empresas a se recuperarem dos impactos gerados pela crise econômica, aplicando a
              contabilidad como ciência.
            </Paragraph>
            <Author>com Fernanda Rocha - CEO da Nucont</Author>
          </SizeFlex>
          <SizeFlex size="53%" sizemedia="54%">
            <Form backgroundmedia="black" color="white" />
          </SizeFlex>
        </SizeView>
      </HeaderContainer>
    </div>
  );
}

export default Header;
