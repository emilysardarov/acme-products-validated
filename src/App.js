import React, { useEffect } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from './store';

const App = () => {
  const { orders, products } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products ({products.length})</Link>
        <Link to="/orders">Orders ({orders.length})</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/products" element={<h1>Products</h1>} />
        <Route path="/orders" element={<h1>Orders</h1>} />
      </Routes>
    </div>
  );
};

export default App;
