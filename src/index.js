import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound';
import MainPage from './pages/MainPage';
import Deposit from './pages/Deposit';
import Savings from './pages/Savings';
import AnnuitySaving from './pages/AnnuitySaving';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"  //1번
import DepositProduct from './pages/DepositProduct';
import SavingsProduct from './pages/SavingsProduct';
import AnnuitySavingProduct from './pages/AnnuitySavingProduct';
const queryClient = new QueryClient()   //2번

const router = createBrowserRouter([
  {
    path : '/',
    element : <App />,
    errorElement : <NotFound />,
    children : [
      { index : true, element :<MainPage/> },
      { path : 'deposit', element : <Deposit/> },
      { path : 'deposit/:bankCode/:productCode', element : <DepositProduct/> },
      { path : 'savings', element : <Savings/>},
      { path : 'savings/:bankCode/:productCode', element : <SavingsProduct/>},
      { path : 'annuity', element : <AnnuitySaving/>},
      { path : 'annuity/:bankCode/:productCode', element : <AnnuitySavingProduct/>},

    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
