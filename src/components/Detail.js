import React from 'react';

const Detail = ({ item }) => {
  return (
    <div>
      <h2>Detalles del Item</h2>
      <h3>{item.title}</h3>
      <p>{item.body}</p>
    </div>
  );
};

export default Detail;