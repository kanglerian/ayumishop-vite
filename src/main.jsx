import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';

import Home from './pages/Home';
import Product from './pages/Invitation/Product';
import DetailProduct from './pages/Invitation/DetailProduct';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/undangan-pernikahan",
    element: <Product/>,
  },
  {
    path: "/souvenir-pernikahan",
    element: <Product/>,
  },
  {
    path: "/detail",
    element: <DetailProduct/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
