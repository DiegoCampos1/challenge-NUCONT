import styled from 'styled-components';

export const Title = styled.h3`
  color: #ffb700;
  font-size: 29px;
  font-weight: 700;
  line-height: 35px;
  margin-top: 0;
  text-align: center;

  @media ( max-width : 800px ) {
    font-size: 17px;
    line-height: 21px;
  }
`;

export const Paragraph = styled.span`
  color: ${(props) => (props.color)};
  font-size: 18px;
  font-weight: ${(props) => (props.weight)};
  line-height: 143.4%;

  @media ( max-width : 800px ) {
    font-size: 10px;
    line-height: 143.4%;
  }
`;

export const SizeFlex = styled.div`
  margin-left: 10px;
  width: ${(props) => (props.size)};

  @media ( max-width : 800px ) {
    width: 100%;
  }
`;

export const AuthorBanerContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 100%;


`;

export const SizeView = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 80%;

  @media ( max-width : 800px ) {
    flex-direction: column;
    width: 90%;

  }
`;

export const Image = styled.img`
  width: 100%;
`;
