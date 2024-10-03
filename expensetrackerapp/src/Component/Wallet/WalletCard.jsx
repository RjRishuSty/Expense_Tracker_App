import React from 'react'
import Styles from './WalletCard.module.css';

const WalletCard = () => {
  return (
    <div className={Styles.wallet}>
      <h2 className={Styles.cardTitle}>Wallet Balance: <span className={Styles.cardAmount}>₹4500</span></h2>
      <button className={Styles.button}>+ Add Income</button>
    </div>
  )
}

export default WalletCard
 