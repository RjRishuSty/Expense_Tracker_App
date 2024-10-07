import React, { useState, useCallback,useContext } from "react";
import Styles from "./WalletCard.module.css";
import { DataContext } from "../../App";
import AddBalance from "../AddBalance/AddBalance";

const WalletCard = () => {
  const {wallet} = useContext(DataContext);
  const [openExpenseBox, setOpenExpenseBox] = useState(false);

  const isClose = useCallback(() => {
    return setOpenExpenseBox(false);
  }, []);


  return ( 
    <div className={Styles.wallet}>
      <h2 className={Styles.cardTitle}> 
        Wallet Balance: <span className={Styles.cardAmount}>₹ {wallet}</span>
      </h2>
      <button className={Styles.button} onClick={() => setOpenExpenseBox(true)}>
        + Add Income
      </button>
      {openExpenseBox && ( 
        <AddBalance isOpen={openExpenseBox} isClose={isClose}/>
      )}
    </div>
  );
};

export default WalletCard;
