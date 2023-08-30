import React from "react";
import userContext from "./ContextCreate";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const GlobalState = (props) => {
  const [data, setData] = useState({
    Income: 0,
    Expense: 0,
    Saving: 0,
    Validate: {
      Income: false,
      Expense: false,
      incomeMsg: "",
      expenseMsg: "",
    },
    Dates: {
      ExpenseDate: "",
      IncomeDate: "2023-08",
    },
    Transaction: [],
    Transaction2: [],
    Term: "Monthly",
  });

  // only use in addbudget component
  const [selectbox, setSelectBox] = useState({
    selectedIncome: "Salary",
    selectedExpense: "Shopping",
  });

  const [active, setActive] = useState(false);
  const [Expense, setExpense] = useState(0);
  const [Income, setIncome] = useState(0);

  // to add expenses
  const addTransaction = () => {
    addAllExpense();
    if (data.Income <= data.Expense || data.Income <= Expense) {
      setData((prev) => {
        return {
          ...prev,
          Validate: {
            ...prev.Validate,
            Expense: true,
            expenseMsg: "Expense cannot be more than income",
          },
        };
      });
    } else if (data.Dates.ExpenseDate === "") {
      setData((prev) => {
        return {
          ...prev,
          Validate: {
            ...prev.Validate,
            Expense: true,
            expenseMsg: "please enter date",
          },
        };
      });
    } else {
      if (Expense && selectbox.selectedExpense) {
        // if (data.Transaction.name === selectbox.selectedExpense) {
        //   let am = data.Transaction.amount + Expense;
        //   console.log("ok");
        //   setData((prev) => ({
        //     ...prev,
        //     Transaction: [...prev.Transaction, am],
        //     Validate: {
        //       ...prev.Validate,
        //       Expense: false,
        //     },
        //   }));
        // }
        const newTransaction = {
          id: uuidv4(),
          name: selectbox.selectedExpense,
          amount: +Expense,
          saving: (data.Income - data.Expense).toString(),
          dates: data.Dates.ExpenseDate,
        };
        setData((prev) => ({
          ...prev,
          Transaction: [...prev.Transaction, newTransaction],
          Validate: {
            ...prev.Validate,
            Expense: false,
          },
        }));
        setSelectBox({ selectedExpense: "Shopping" });
      }
    }
    setExpense("");
  };

  const initialValue = 0;
  // to add all the expenses
  function addAllExpense() {
    const sum = data?.Transaction.reduce((accumulator, currentObject) => {
      return accumulator + currentObject.amount;
    }, initialValue);
    setData((prev) => {
      return { ...prev, Expense: sum };
    });
  }

  //  to disable the income input
  const addAllIncome = () => {
    setActive(true);
    const sum2 = data?.Transaction2?.reduce((accumulator, currentObject) => {
      return accumulator + currentObject.amount;
    }, initialValue);
    setData((prev) => {
      return { ...prev, Income: sum2 };
    });
    setIncome(sum2);
  };

  // for adding Income
  const addIncome = () => {
    if (Income <= 0) {
      setData((prev) => {
        return {
          ...prev,
          Validate: {
            ...prev.Validate,
            Income: true,
            incomeMsg: " Income cannot be zero or less than zero",
          },
        };
      });
    } else if (data.Dates.IncomeDate === "") {
      setData((prev) => {
        return {
          ...prev,
          Validate: {
            ...prev.Validate,
            Income: true,
            incomeMsg: "please add date",
          },
        };
      });
    } else {
      if (Income && selectbox.selectedIncome) {
        const newTransaction = {
          id: uuidv4(),
          name: selectbox.selectedIncome,
          amount: +Income,
          dates: data.Dates.IncomeDate,
        };
        setData((prev) => {
          return {
            ...prev,
            Transaction2: [...prev.Transaction2, newTransaction],
            Validate: { ...prev.Validate, Income: false, incomeMsg: "" },
          };
        });
        setSelectBox({ selectedIncome: "Salary" });
        setIncome("");
      }
    }
  };

  //till here
  // balance check and save the saving
  const checkBalance = () => {
    // let saving = data.Income - data.Expense;
    setData((prev) => {
      return { ...prev, Saving: data.Income - data.Expense };
    });
  };

  // delete functionality
  const handleDelete = (id) => {
    const updatedTransaction = data.Transaction.filter(
      (value) => value.id !== id
    );
    const updatedTransaction2 = data.Transaction2.filter(
      (value) => value.id !== id
    );

    setData((prev) => ({
      ...prev,
      Transaction: updatedTransaction,
      Transaction2: updatedTransaction2,
    }));
  };

  // contexxt value store in variable
  const contextValue = {
    data,
    setData,
    checkBalance,
    handleDelete,
    selectbox,
    setSelectBox,
    active,
    setActive,
    Expense,
    setExpense,
    Income,
    setIncome,
    addTransaction,
    addAllIncome,
    addAllExpense,
    addIncome,
  };
  return (
    <userContext.Provider value={contextValue}>
      {props.children}
    </userContext.Provider>
  );
};

export default GlobalState;
