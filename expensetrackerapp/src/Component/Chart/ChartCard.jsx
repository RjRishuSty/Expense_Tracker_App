import React from "react";
import Styles from "./ChartCard.module.css";

const ChartCard = () => {
  return (
    <div className={Styles.chart}>
      <div className={Styles.firstDiv}>
        <span className={Styles.fitstText}>70%</span>
        <div className={Styles.secondDiv}>
          <span className={Styles.secondText}>10%</span>
        </div>
        <div className={Styles.thirdtDiv}>
          <span className={Styles.thirdText}>30%</span>
        </div>
      </div>
 
      <div className={Styles.description}>
        <div className={Styles.Box}>
          <div className={Styles.foodBorder}></div>
          <p>Food</p>
        </div>
        <div className={Styles.Box}>
          <div className={Styles.entertainmentBorder}></div>
          <p>Entertainment</p>
        </div>
        <div className={Styles.Box}>
          <div className={Styles.travelBorder}></div>
          <p>Travel</p>
        </div>
      </div>
    </div>
  );
};

export default ChartCard;
