import React from 'react';
import './App.css';
import {Header} from "./container/Header"
import {Balance} from "./container/Balance"
import { IncomeExpenses } from './container/IncomeExpenses';
import { TransactionList } from './container/TransactionList';
import { AddTransaction } from './container/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
    <Header />
    <div className='container'>
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </div>
    </GlobalProvider>
  );
}

export default App;
