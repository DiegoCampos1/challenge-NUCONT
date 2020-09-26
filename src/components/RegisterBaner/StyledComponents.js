import styled from 'styled-components';

export const RegisterBanerContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0;

  @media ( max-width : 800px ) {
    flex-direction: column;
  }
`;

export const SizeFlex = styled.div`
  width: ${(props) => (props.size)};
  text-align: center;

  @media ( max-width : 800px ) {
    width: ${(props) => (props.sizemedia)};
    margin-top: 5vh;

  }
`;

export const Paragraph = styled.span`
  font-weight: 400;
  line-height: 143.4%;
  color: #063254;

  @media ( max-width : 800px ) {
    font-size: 14px;
    line-height: 17px;

  }
`;
