import React from 'react';
import {
  Title,
  Paragraph,
  HeaderContainer,
  Author,
  SizeView,
  View,
  SizeFlex,
} from './StyledComponents';
import Form from '../Form';

function Header() {
  return (
    <View>
      <HeaderContainer>
        <SizeView>
          <SizeFlex size="62%">
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
          <SizeFlex size="38%">
            {/* <Form color="primary" /> */}
            <Form />
          </SizeFlex>
        </SizeView>
      </HeaderContainer>
    </View>
  );
}

export default Header;
