import React, { createContext, useCallback, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import NotFound from "./Page/NotFound";
import { enqueueSnackbar } from "notistack";
export const DataContext = createContext();

function App() {
  // TODO: Expenses Data ...............
  const [expenseData, setExpenseData] = useState(() => {
    const storedExpenses = localStorage.getItem("expenseData");
    return storedExpenses ? JSON.parse(storedExpenses) : [];
  });
  // ToDo : Wallet Data ......................

  const [wallet, setWallet] = useState(() => {
    const storedWallet = localStorage.getItem("wallet");
    // console.log('',storedWallet)
    return storedWallet ? JSON.parse(storedWallet) : 5000;
  });

  const updateWallet = useCallback((newWallet) => {
    setWallet(newWallet);
    localStorage.setItem("wallet", JSON.stringify(newWallet));
  }, []);

  const addExpense = useCallback(
    (e, title, price, category, date, index) => {
      e.preventDefault();

      if (price > wallet) {
        enqueueSnackbar("Insufficient balance in wallet", { variant: "error" });
        return;
      }
      if (index !== undefined && index !== null) {
        const updatedExpenses = expenseData.map((item, i) => {
          if (i === index) {
            updateWallet(wallet + (item.price - price));
            return {
              ...item,
              title: title,
              price: Number(price),
              category: category,
              date: date,
            };
          }
          return item;
        });
        setExpenseData(updatedExpenses);
        localStorage.setItem("expenseData", JSON.stringify(updatedExpenses));
        enqueueSnackbar("Expense updated successfully", { variant: "info" });
      } else {
        
        const newExpense = {
          title: title,
          price: Number(price),
          category: category,
          date: date,
        };
        const updatedExpenses = [...expenseData, newExpense];

        setExpenseData(updatedExpenses);
        updateWallet(wallet - price);

        localStorage.setItem("expenseData", JSON.stringify(updatedExpenses));
        // console.log("ADD Expense called");
        enqueueSnackbar("Expense added successfully", { variant: "success" });
      }
    },
    [expenseData, wallet, updateWallet]
  );

  // TODO:  Wallet .....................

  const addBalance = useCallback(
    (amount, e) => {
      e.preventDefault();
      if(!amount)return enqueueSnackbar("Somethings went wrong", { variant: "error" });
      const updatedWallet = wallet + JSON.parse(amount);
      updateWallet(updatedWallet);
      localStorage.setItem("wallet", updatedWallet);
      enqueueSnackbar("Balance added successfully", { variant: "success" });
    },
    [wallet, updateWallet]
  );

  useEffect(() => {
    if (!localStorage.getItem("wallet")) {
      localStorage.setItem("wallet", 5000);
      setWallet(5000);
    }
  }, []);
  return (
    <>
      <DataContext.Provider
        value={{ wallet, addBalance, addExpense, expenseData, setExpenseData }}
      >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </DataContext.Provider>
    </>
  );
}

export default App;
