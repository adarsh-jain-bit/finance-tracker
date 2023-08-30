import React from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer ,LabelList} from 'recharts';
import "./Dashboard.css"
const ExpenseChart = () => {
    
const data = [
    { name: 'Shoping', value: 30 },
    { name: 'miscellaneous', value: 5 },
    { name: 'subscription', value: 20 },
    { name: 'Recharge', value: 5 },
    { name: 'Fuel', value: 40 },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042',"red"];
  return (
    <>
      <h4 className='text-center text-primary'>ExpenseChart</h4>
      <ResponsiveContainer width="100%" aspect={1}>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            label={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#f1eeeed9"
          >
     {
      data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index]} />
      ))
    }
      <LabelList dataKey="name"/>
            </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </>
  )
}

export default ExpenseChart



