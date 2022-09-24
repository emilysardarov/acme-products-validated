import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateProduct } from './store';

const ProductUpdate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state) => state);
  const { id } = useParams();
  const [name, setName] = useState('');

  useEffect(() => {
    const product = products.find((product) => product.id === id);
    if (product) {
      setName(product.name);
    }
  }, [products, id]);

  const update = async (e) => {
    e.preventDefault();
    const updated = { id, name };
    try {
      dispatch(updateProduct(updated, navigate));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Products</h1>
      <form onSubmit={update}>
        <div>
          <label>Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <button>Update</button>
      </form>
    </div>
  );
};

export default ProductUpdate;
