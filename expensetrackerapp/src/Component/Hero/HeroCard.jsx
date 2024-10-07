import React from "react";
import Styles from "./HeroCard.module.css";
import WalletCard from "../Wallet/WalletCard";
import ExpensesCard from "../Expenses/ExpensesCard";
import ChartCard from "../Chart/ChartCard";
import ResentTransaction from "../RecentTransactions/ResentTransaction";
import TopExpenses from "../TopExpenses/TopExpenses";

const HeroCard = () => {

  return ( 
    <>
      <div className={Styles.heroBox}>
        <div className={Styles.cardDiv}>
          <WalletCard />
          <ExpensesCard />
        </div>
        <ChartCard />
      </div>
      <div className={Styles.resentOrTopCard}>
        <ResentTransaction />
        <TopExpenses />
      </div>
    </>
  );
};

export default HeroCard;
