import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import axios from 'axios';

const products = (state = [], action) => {
  if (action.type === 'SET_PRODUCTS') {
    return action.products;
  }
  return state;
};

const orders = (state = [], action) => {
  if (action.type === 'SET_ORDERS') {
    return action.orders;
  }
  return state;
};

const setProducts = (products) => {
  return {
    type: 'SET_PRODUCTS',
    products,
  };
};

export const fetchProducts = () => {
  return async (dispatch) => {
    const response = await axios.get('/api/products');
    dispatch(setProducts(response.data));
  };
};

const reducer = combineReducers({
  products,
  orders,
});

const store = configureStore({ reducer, middleware: [thunk, logger] });
export default store;
