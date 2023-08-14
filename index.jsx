import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import routes from './routes';

const router = createHashRouter(routes);
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<RouterProvider router={router} />);
