import React from 'react';
import PropTypes from 'prop-types';
import {
  Elipse,
  ContainerList,
  Paragraph,
  Title,
} from './StyledComponents';

function ListComponent({ title, list }) {
  const renderTitle = (titleList, listItems) => (
    <div>
      <Title>{titleList}</Title>
      <div>
        {listItems.map((item, index) => (
          <ContainerList key={`item ${index + 1}`}>
            <Elipse />
            <Paragraph>{item}</Paragraph>
          </ContainerList>
        ))}
      </div>
    </div>
  );

  return <div>{renderTitle(title, Array.from(list))}</div>;
}

ListComponent.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default ListComponent;
