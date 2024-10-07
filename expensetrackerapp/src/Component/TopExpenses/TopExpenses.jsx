import React, { useContext } from "react";
import { ComposedChart, Bar, XAxis, YAxis } from "recharts";
import Styles from "./TopExpenses.module.css";
import { DataContext } from "../../App";

export default function TopExpenses() {

  const { expenseData } = useContext(DataContext);
  const validateData = expenseData.filter(
    (item) => typeof item.price === "number" && item.price > 0
  );
  
  return (
    <div className={Styles.topExpenses}>
      <h2 className={Styles.heading}>Top Expenses</h2>
      <div className={Styles.card}>
      {
        expenseData.length >0 ?(
          <ComposedChart
        layout="vertical"
        width={300}
        height={300}
        data={validateData}
        
      >
        <XAxis dataKey="price" type="number" />
        <YAxis dataKey="category" type="category" />
        <Bar dataKey="price" barSize={20} fill="#413ea0" />
      </ComposedChart>
        ):(
          <h1 className={Styles.notFound}>No Record</h1>
        )
      }
      </div>
    </div>
  );
}
