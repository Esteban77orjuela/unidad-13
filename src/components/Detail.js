import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getItemById } from '../api/api';

const Detail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getItemById(id).then((data) => setItem(data));
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Detalles del Item</h2>
      <h3>{item.title}</h3>
      <p>{item.body}</p>
    </div>
  );
};

export default Detail;
