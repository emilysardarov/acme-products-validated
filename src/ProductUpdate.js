import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProductUpdate = () => {
  const { products } = useSelector((state) => state);
  const { id } = useParams();
  const [name, setName] = useState('');

  useEffect(() => {
    const product = products.find((product) => product.id === id);
    if (product) {
      setName(product.name);
    }
  }, [products, id]);

  return (
    <form>
      <div>
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
    </form>
  );
};

export default ProductUpdate;
