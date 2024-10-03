import React from "react";
import Styles from "./HeroCard.module.css";
import WalletCard from "../Wallet/WalletCard";
import ExpensesCard from "../Expenses/ExpensesCard";
import ChartCard from "../Chart/ChartCard";

const HeroCard = () => {
  return (
    <div className={Styles.heroBox}>
      <div className={Styles.cardDiv}>
        <WalletCard />
        <ExpensesCard />
      </div>
      <ChartCard /> 
    </div>
  );
};

export default HeroCard;
