import React, { useState, useEffect } from 'react';
import Item from './Item';
import axios from 'axios';

const Listado = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
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