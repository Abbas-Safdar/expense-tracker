import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';


export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const [kharcha, setkharcha] = useState(0);

  const { addTransaction } = useContext(GlobalContext);
  const { transactions } = useContext(GlobalContext);
  /*
  const handleAddition = (event) => {
    event.preventDefault();
    if (Number(amount||kharcha) === 0) {
        alert("Please enter correct value");
        return false;
    }
    const newTransaction=({
        amount: Number(amount),
        text: text,kharcha,
        id: Math.floor(Math.random() * 100000000)
    });
    addTransaction(newTransaction);
    setText('');
    setAmount(0);
    setkharcha(0);
}*/
  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
      kharcha: +kharcha
    }

    addTransaction(newTransaction);
    setText('');
    setAmount(0);
    setkharcha(0);
    
  }

  return (
    <>
      <h3>Add new transaction</h3>
      
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            </label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter income..." />
        </div>
        <div className="form-control">
          <label htmlFor="kharcha"
            >Expense <br />
            </label>

          <input type="number" value={kharcha} onChange={(e) => setkharcha(e.target.value)} placeholder="Enter expense..." />
        </div>
        <button className="btn">Add transaction</button>

      </form>
    </>
  )
}
