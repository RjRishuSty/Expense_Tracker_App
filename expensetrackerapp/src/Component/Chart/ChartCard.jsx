import React, { useContext } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import Styles from "./ChartCard.module.css";
import { DataContext } from "../../App";

const COLORS = ["#FF9304", "#A000FF", "#FDE006"];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "center"}
      dominantBaseline="center"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const ChartCard = () => {
  const { expenseData } = useContext(DataContext);
  const validateData = expenseData.filter(
    (item) => typeof item.price === "number" && item.price > 0
  );
  // console.log('Valid',validateData);

  return (
    <div className={Styles.chart}>
      {expenseData.length >0 ?(<PieChart width={199} height={199}>
        <Pie
          dataKey="price"
          isAnimationActive={false}
          labelLine={false}
          data={validateData}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label={renderCustomizedLabel}
        >
          {validateData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>):(
        <h1 className={Styles.notFound}>No Record</h1>
      )}
      <div className={Styles.description}>
        <div className={Styles.Box}>
          <div className={Styles.foodBorder}></div> <span>Food</span>
        </div>
        <div className={Styles.Box}>
          <div className={Styles.entertainmentBorder}></div>{" "}
          <span>Entertainment</span>
        </div>
        <div className={Styles.Box}>
          <div className={Styles.travelBorder}></div> <span>Travel</span>
        </div>
      </div>
    </div>
  );
};

export default ChartCard;
