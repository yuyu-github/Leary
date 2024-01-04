import React from 'react';
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import App from './app/App';

export default createHashRouter(
  createRoutesFromElements(<Route path='/' element={<App />}></Route>),
);
