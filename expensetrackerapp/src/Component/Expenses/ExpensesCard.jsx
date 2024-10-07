import React, { useCallback, useContext, useState, useEffect } from "react";
import Styles from "./ExpensesCard.module.css";
import AddExpense from "../AddExpense/AddExpense";
import { DataContext } from "../../App";

const ExpensesCard = () => {
  const { expenseData } = useContext(DataContext);
  const [openExpenseBox, setOpenExpenseBox] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    
    if (expenseData && expenseData.length > 0) {
      const totalAmount = expenseData.reduce((acc, curr) => {
        return acc + Number(curr.price);
      }, 0);

      setTotal(totalAmount);
    }else{
      setTotal(0)
    }
  }, [expenseData]);

  const isClose = useCallback(() => {
    return setOpenExpenseBox(false);
  }, []);

  return (
    <div className={Styles.expenses}>
      <h2 className={Styles.expensesTitle}>
        Expenses: <span className={Styles.expensesAmount}>₹ {total}</span>
      </h2>
      <button className={Styles.button} onClick={() => setOpenExpenseBox(true)}>
        + Add Income
      </button>
      {openExpenseBox && (
        <AddExpense isOpen={openExpenseBox} isClose={isClose} />
      )}
    </div>
  );
};

export default ExpensesCard;
