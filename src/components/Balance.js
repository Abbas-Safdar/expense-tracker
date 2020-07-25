import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const kharchas = transactions.map(transaction => transaction.kharcha);


  const total1 = amounts.reduce((acc, item) => (acc += item), 0);
  const kharchaas =kharchas.reduce((acc2, item2) => (acc2 += item2), 0);
  const total2 = total1-kharchaas
  return (
    <>
      <h4>Your Balance</h4>
    <h1>${total2}</h1>
    </>
  )
}
