import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < transaction.kharcha  ? '-' : '+';

  return (
    <li className={transaction.amount > transaction.kharcha ? 'plus' : 'minus'}>
      {transaction.text} <span>{sign}${(transaction.amount > transaction.kharcha ? transaction.amount :transaction.kharcha)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  )
}
