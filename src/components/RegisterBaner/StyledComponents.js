import styled from 'styled-components';

export const RegisterBanerContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0;
`;

export const SizeFlex = styled.div`
  width: ${(props) => (props.size)};
  text-align: center;
`;

export const Paragraph = styled.span`
  font-weight: 400;
  line-height: 143.4%;
  color: #063254;
`;
