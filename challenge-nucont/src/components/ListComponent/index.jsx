import React from 'react';
import { Elipse, ContainerList, Paragraph, Title } from './StyledComponents';

function ListComponent({ title, list }) {
  const renderTitle = (titleList, listItems) => {
    return (
      <div>
        <Title>{titleList}</Title>
        <div>{listItems.map((item) => {
          return(
            <ContainerList>
            <Elipse />
            <Paragraph>{item}</Paragraph>
            </ContainerList>
          )
        })}
        </div>
      </div>
    );
  };

  return (
    <div>
      {renderTitle(title, Array.from(list))}
    </div>
  );
}

export default ListComponent;
