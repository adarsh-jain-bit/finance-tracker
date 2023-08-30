import React from "react";
import SavingsIcon from "@mui/icons-material/Savings";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useContext } from "react";
import userContext from "../context/ContextCreate";
const Card = () => {
  const { data } = useContext(userContext);
  const initialData = [
    {
      heading: `Earning(${data.Term})`,
      money: data.Income,
      icon: <MonetizationOnIcon className="fs-1 text-secondary " />,
      color: "success",
    },
    {
      heading: `Expense(${data.Term})`,
      money: data.Expense,
      icon: <AddShoppingCartIcon className="fs-1 text-secondary " />,
      color: "danger",
    },
    {
      heading: `Saving(${data.Term})`,
      money: data.Income - data.Expense,
      icon: <SavingsIcon className="fs-1 text-secondary " />,
      color: "warning",
    },
  ];
  return (
    <>
      {initialData.map(({ heading, money, icon, color }, index) => (
        <div className="card shadow" key={index}>
          <div
            className={`card-body d-flex gap-3 justify-content-between align-items-center border-start border-${color} border-4`}
          >
            <div className="d-flex flex-column ">
              <h6 className="card-subtitle mb-2 text-primary">{heading}</h6>
              <h5 className="card-title">{money}</h5>
            </div>
            {icon}
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
