import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";
import { useContext } from "react";
import userContext from "../context/ContextCreate";
const BarChart2 = () => {
  const { data } = useContext(userContext);
  const demidata = [
    { name: "Salary", amount: 30000 },
    { name: "Investment", amount: 10000 },
    { name: "Freelancing", amount: 2000 },
  ];
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF8042"];
  return (
    <>
      <h4 className="text-center text-primary my-3">Income Chart</h4>
      {data.Transaction.length > 0 ? (
        <BarChart width={300} height={400} data={data.Transaction2}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount">
            {data.Transaction.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} width={50} />
            ))}
          </Bar>
        </BarChart>
      ) : (
        <BarChart width={300} height={400} data={demidata}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Bar dataKey="amount">
            {demidata.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
          </Bar>
        </BarChart>
      )}
    </>
  );
};
export default BarChart2;
