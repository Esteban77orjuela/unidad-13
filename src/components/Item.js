import React from 'react';

const Item = ({ item }) => {
  return (
    <div>
      <h3>{item.title}</h3>
      <p>{item.body}</p>
    </div>
  );
};

export default Item;