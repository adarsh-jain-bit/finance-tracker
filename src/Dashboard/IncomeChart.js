import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";
import { useContext, useState } from "react";
import userContext from "../context/ContextCreate";
const IncomeChart = () => {
  const { data } = useContext(userContext);
  //   console.log(data);
  const monthlydata = [
    {
      Xindex: "jan",
      Yindex: "10000",
      income: "10000",
      Expense: "8000",
      saving: "5000",
    },
    {
      Xindex: "Mar",
      Yindex: "10000",
      income: "10000",
      Expense: "5000",
      saving: "3000",
    },
    {
      Xindex: "May",
      Yindex: "10000",
      income: "10000",
      Expense: "7000",
      saving: "8000",
    },
    {
      Xindex: "July",
      Yindex: "10000",
      income: "10000",
      Expense: "9000",
      saving: "2000",
    },
    {
      Xindex: "sep",
      Yindex: "10000",
      income: "10000",
      Expense: "2000",
      saving: "1000",
    },
    {
      Xindex: "dec",
      Yindex: "10000",
      income: "10000",
      Expense: "5000",
      saving: "5000",
    },
  ];

  const monthly = data.Transaction.map((val) => ({
    Xindex: val.name,
    Yindex: data.Expense,
    Expense: val.amount,
  }));
  console.log(monthly);

  let a = monthly.map(({ Xindex, Expense }) => {
    if (monthly.hasOwnProperty(Xindex)) {
      Xindex += Expense;
    } else {
      Xindex = Expense;
    }
  });
  console.log(monthly);
  console.log(a);
  let chart = monthly.length > 0 ? monthly : monthlydata;
  return (
    <>
      <h4 className="text-center text-primary">Monthly Expense(in Thousand)</h4>
      <div className="bg-white p-3 rounded-2 mt-4">
        <ResponsiveContainer width="100%" aspect={3}>
          <LineChart data={chart}>
            <CartesianGrid strokeDasharray="3 3" />
            <Legend />
            <XAxis dataKey="Xindex" />
            <YAxis dataKey="Yindex" />
            <Tooltip />
            <Line type="monotone" dataKey="Expense" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default IncomeChart;
