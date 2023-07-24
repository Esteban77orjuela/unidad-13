

import React, { useState, useEffect } from 'react';
import Item from './Item';
import { getItems } from '../api/api';

const Listado = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then((data) => setItems(data));
  }, []);



  return (
    <div>
      <h2>Listado de Items</h2>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Listado;
