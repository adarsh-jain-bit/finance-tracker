import React from "react";
import "./Dashboard.css";
import "./AddBudget.css";
import userContext from "../context/ContextCreate";
import { useContext, useState, useEffect, useLayoutEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const AddBudget = () => {
  const {
    data,
    setData,
    checkBalance,
    handleDelete,
    selectbox,
    setSelectBox,
    active,
    Expense,
    setExpense,
    Income,
    setIncome,
    addTransaction,
    addAllIncome,
    addAllExpense,
    addIncome,
  } = useContext(userContext);

  // for selecting Category
  const handleCategoryChange = (value) => {
    setSelectBox({ ...selectbox, selectedExpense: value });
  };
  const handleCategoryChange2 = (value) => {
    setSelectBox({ ...selectbox, selectedIncome: value });
  };

  // to call the addallExpenses
  useEffect(() => {
    checkBalance();
    addAllExpense();
  }, [data.Transaction, data.Expense]);

  // console.log(data);

  return (
    <>
      <button
        type="button"
        className="btn-primary btn addbutton shadow mt-5 me-5 mb-3"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add Transaction
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add Transaction
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="wrapper">
                <div className="container">
                  <div className="sub-container">
                    {/* <!-- Budget --> */}
                    <div className="total-amount-container">
                      <h3>Income</h3>
                      <p
                        className={`${
                          data.Validate.Income ? "" : "hide"
                        } error`}
                        id="budget-error"
                      >
                        {data.Validate.incomeMsg}
                      </p>
                      <input
                        type="month"
                        value={data.Dates.IncomeDate}
                        onChange={(e) => {
                          setData((prev) => ({
                            ...prev,
                            Dates: {
                              ...prev.Dates,
                              IncomeDate: e.target.value,
                            },
                          }));
                        }}
                      />
                      <select
                        className="form-select mb-3"
                        aria-label="Default select example"
                        value={selectbox.selectedIncome}
                        onChange={(e) => handleCategoryChange2(e.target.value)}
                      >
                        <option value="Salary">Salary</option>
                        <option value="Investment">Investment</option>
                        <option value="Freelancing">Freelancing</option>
                      </select>
                      <input
                        type="text"
                        id="total-amount"
                        placeholder="Enter Total Amount"
                        value={Income}
                        onChange={(e) => {
                          const newIncome = isNaN(+e.target.value)
                            ? 0
                            : +e.target.value;
                          setIncome(newIncome);
                        }}
                        disabled={active}
                      />
                      <button
                        className="submit"
                        id="total-amount-button"
                        onClick={addIncome}
                      >
                        Add Income
                      </button>
                      <button
                        className="submit ms-4"
                        id="total-amount-button"
                        onClick={addAllIncome}
                      >
                        Set Income
                      </button>
                    </div>

                    {/* <!-- Expenditure --> */}
                    <div className="user-amount-container">
                      <h3>Expenses</h3>
                      <p
                        className={`${
                          data.Validate.Expense ? "" : "hide"
                        } error`}
                        id="product-title-error"
                      >
                        {data.Validate.expenseMsg}
                      </p>
                      <input
                        type="date"
                        min={`${data.Dates.IncomeDate}-01`}
                        max={`${data.Dates.IncomeDate}-30`}
                        value={data.Dates.ExpenseDate}
                        onChange={(e) => {
                          setData((prev) => ({
                            ...prev,
                            Dates: {
                              ...prev.Dates,
                              ExpenseDate: e.target.value,
                            },
                          }));
                        }}
                      />
                      <select
                        className="form-select mb-3"
                        aria-label="Default select example"
                        value={selectbox.selectedExpense}
                        onChange={(e) => handleCategoryChange(e.target.value)}
                      >
                        <option value="Shopping">Shopping</option>
                        <option value="Subscription">Subscription</option>
                        <option value="Fuel">Fuel</option>
                        <option value="Miscellaneous">Miscellaneous</option>
                        <option value="Recharge">Recharge</option>
                      </select>
                      <input
                        type="text"
                        id="user-amount"
                        placeholder="Enter Cost of Product"
                        value={Expense}
                        onChange={(e) => {
                          const newExpense = isNaN(+e.target.value)
                            ? 0
                            : +e.target.value;
                          setExpense(newExpense);
                        }}
                      />
                      <button
                        className="submit"
                        id="check-amount"
                        onClick={() => {
                          // checkBalance();
                          addTransaction();
                        }}
                      >
                        Set Expense
                      </button>
                    </div>
                  </div>
                  {/* <!-- Output --> */}
                  <div className="output-container flex-space">
                    <div>
                      <p>Total Income</p>
                      <span id="amount">{data.Income}</span>
                    </div>
                    <div>
                      <p>Expenses</p>
                      <span id="expenditure-value">{data.Expense}</span>
                    </div>
                    <div>
                      <p>Saving</p>
                      <span id="balance-amount">{data.Saving}</span>
                    </div>
                  </div>
                  {/* list */}
                  <div className="list">
                    <h3>Expense List</h3>
                    <div className="list-container" id="list">
                      <ul className="p-0">
                        {data.Transaction.map(({ name, amount, id }) => (
                          <li
                            className="d-flex mb-2 mt-0 justify-content-between output-container  p-2"
                            key={id}
                          >
                            <div className="d-flex gap-5 mb-2  w-50 justify-content-between">
                              <span>{name}</span> <span>Rs.{amount}</span>
                            </div>
                            <button
                              className="btn btn-danger"
                              onClick={() => handleDelete(id)}
                            >
                              delete
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={checkBalance}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBudget;
