import React, { useContext, useState } from "react";
import Styles from "./AddBalance.module.css";
import { DataContext } from "../../App";

const AddBalance = ({ isOpen, isClose }) => {
    const {addBalance} = useContext(DataContext);

  const [addAmount, setAddAmount] = useState();

  if (!isOpen) return;

  return (
    <div className="ModelFormBox"> 
      <div className={Styles.addBalance}>
        <h2 className={Styles.heading}>Add Balance</h2>
        <form onSubmit={(e)=>addBalance(addAmount,e)} className={Styles.form}>
          <input
            type="number"
            className={Styles.input}
            placeholder="Income Amount"
            onChange={(e) => setAddAmount(e.target.value)}
          />
          <div className={Styles.buttonBox}>
            <button type="submit" className={Styles.addButton}>
              Add Expense
            </button>
            <button
              type="button"
              className={Styles.cancelButton}
              onClick={isClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBalance;
