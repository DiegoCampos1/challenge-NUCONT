import React from 'react';

function ListComponent({ title, list }) {
  const renderTitle = (titleList, listItems) => {
    return (
      <div>
        <h3>{titleList}</h3>
        <div>{listItems.map((item) => <p>{item}</p>)}</div>
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
