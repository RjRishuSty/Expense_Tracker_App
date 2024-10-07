import React, { useState, useCallback, useContext } from "react";
import Styles from "./ResentTransaction.module.css";
import EditExpense from "../EditExpense/EditExpense";
import { DataContext } from "../../App";
import { enqueueSnackbar } from "notistack";
import Pagination from "../Pagination/Pagination";

const ResentTransaction = () => {
  const { expenseData, setExpenseData } = useContext(DataContext);
  const [openExpenseBox, setOpenExpenseBox] = useState(false);
  const [filterData, setFilterData] = useState({});
  const [index, setIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const deleteHandler = (id) => {
    const updatedExpenses = expenseData.filter((_, index) => index !== id);
    if (updatedExpenses) {
      setExpenseData(updatedExpenses);
      localStorage.setItem("expenseData", JSON.stringify(updatedExpenses));
      enqueueSnackbar("Deleted Expense", { variant: "success" });
    } else {
      enqueueSnackbar("Something went wrong", { variant: "error" });
    }
  };

  const editHandler = (item, id) => {
    setOpenExpenseBox(true);
    setFilterData(item);
    setIndex(id);
  };

  const isClose = useCallback(() => {
    setOpenExpenseBox(false);
  }, []);

  const formatDate = (dateItem) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateItem);
    return date.toLocaleDateString("en-US", options);
  };

  const indexOfLastExpense = currentPage * itemsPerPage;
  const indexOfFirstExpense = indexOfLastExpense - itemsPerPage;
  const currentExpenses = expenseData.slice(
    indexOfFirstExpense,
    indexOfLastExpense
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className={Styles.resentTransaction}>
        <h2 className={Styles.heading}>Recent Transactions</h2>
        <div className={Styles.card}>
          {expenseData.length > 0 ? (
            <>
              <ul className={Styles.ul}>
                {currentExpenses.map((item, index) => {
                  return ( 
                    <li className={Styles.li} key={index}>
                      <div className={Styles.content}>
                        <div className={Styles.profile}>
                          {item.category === "Samosa" && (
                            <img
                              src={require("../../assets/profile1.png")}
                              alt="Samosa"
                            />
                          )}
                          {item.category === "Auto" && (
                            <img
                              src={require("../../assets/profile2.png")}
                              alt="Auto"
                            />
                          )}
                          {item.category === "Movie" && (
                            <img
                              src={require("../../assets/profile3.png")}
                              alt="Movie"
                            />
                          )}
                        </div>
                        <div className={Styles.userDetails}>
                          <h2 className={Styles.name}>{item.category}</h2>
                          <p className={Styles.date}>{formatDate(item.date)}</p>
                        </div>
                      </div>
                      <div className={Styles.amountAndButton}>
                        <h2 className={Styles.amount}>₹ {item.price}</h2>
                        <div className={Styles.buttonBox}>
                          <button
                            className={Styles.deleteButton}
                            onClick={() =>
                              deleteHandler(index + indexOfFirstExpense)
                            }
                          >
                            <i className="fa-solid fa-xmark"></i>
                          </button>
                          <button
                            className={Styles.editButton}
                            onClick={() =>
                              editHandler(item, index )
                            }
                          >
                            <i className="fa-solid fa-pen-to-square"></i>
                          </button>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <Pagination
                dataLength={expenseData.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </>
          ) : (
            <h1 className={Styles.notFound}>No Transactions Record</h1>
          )}
        </div>
      </div>
      {openExpenseBox && (
        <EditExpense
          isOpen={openExpenseBox}
          isClose={isClose}
          filterData={filterData}
          index={index}
        />
      )}
    </>
  );
};

export default ResentTransaction;
