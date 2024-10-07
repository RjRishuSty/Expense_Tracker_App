import React, { useContext, useState } from "react";
import Styles from "./AddExpense.module.css";
import { DataContext } from "../../App";
import { enqueueSnackbar } from "notistack";

const AddExpense = ({ isOpen, isClose }) => {
  const { addExpense } = useContext(DataContext);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  if (!isOpen) return;

  return (
    <div className="ModelFormBox">
      <div className={Styles.addExpense}>
        <h2 className={Styles.heading}>Add Expenses</h2> 
        <form
          onSubmit={(e) => addExpense(e, title, price, category, date)}
          className={Styles.form}
        >
          <input
            type="text"
            className={Styles.input}
            placeholder="Title"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="number"
            className={Styles.input}
            placeholder="Price"
            name="price"
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <select
            className={Styles.select}
            onChange={(e) => setCategory(e.target.value)}
            name="category"
            required
          >
            <option value="">Select Category</option>
            <option value="Movie">Movie</option>
            <option value="Samosa">Samosa</option>
            <option value="Auto">Auto</option>
          </select>
          <input
            type="date"
            className={Styles.input}
            placeholder="dd/mm/yyyy"
            onChange={(e) => setDate(e.target.value)}
            required
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

export default AddExpense;
