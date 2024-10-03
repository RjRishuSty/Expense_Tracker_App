import React from 'react'
import Styles from './Expenses.module.css';

const ExpensesCard = () => {
  return (
    <div className={Styles.expenses}>
      <h2 className={Styles.expensesTitle}>Expenses: <span className={Styles.expensesAmount}>₹500</span></h2>
      <button className={Styles.button}>+ Add Income</button>
    </div>
  ) 
}

export default ExpensesCard
