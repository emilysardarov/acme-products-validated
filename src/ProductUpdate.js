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
  const [price, setPrice] = useState(0);
  const [numberInStock, setNumberInStock] = useState(0);
  const [error, setError] = useState({});

  useEffect(() => {
    const product = products.find((product) => product.id === id);
    if (product) {
      setName(product.name);
      setPrice(product.price);
      setNumberInStock(product.numberInStock);
    }
  }, [products, id]);

  const update = async (e) => {
    e.preventDefault();
    const updated = { id, name, price, numberInStock };
    try {
      dispatch(updateProduct(updated, navigate));
    } catch (error) {
      setError(error.response.data);
    }
  };

  let messages = [];
  if (error.errors) {
    messages = error.errors.map((e) => e.message);
  }

  console.log(messages);

  return (
    <div>
      <h1>Products</h1>
      <form onSubmit={update}>
        {/* <pre>{JSON.stringify(error, null, 2)}</pre> */}
        <ul>
          {messages.map((message) => {
            return <li key={message}>{message}</li>;
          })}
        </ul>
        <div>
          <label>Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Price</label>
          <input value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div>
          <label>Number in Stock</label>
          <input
            value={numberInStock}
            onChange={(e) => setNumberInStock(e.target.value)}
          />
        </div>
        <button>Update</button>
      </form>
    </div>
  );
};

export default ProductUpdate;
