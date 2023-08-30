import React from 'react'
import Card from './Card'
import IncomeChart from './IncomeChart';
import BarChart2 from './BarChart';
import "./Dashboard.css"
import AddBudget from './AddBudget';
const HomePage = () => {

  return (
    <>
        <div className='d-flex justify-content-between align-items-center' >
  <h1 className='ms-5 mt-3 mb-3'>Finance Tracker</h1>
    <AddBudget/>
  </div>
    <div className='row ms-2 d-flex align-items-center'>
 <div className='col-8 '>
 <div className='container '>
<div className='row'>
 <div className='d-flex justify-content-between'>
 <Card/>
 </div>
</div>
</div>
<div className='container'>
    <div className='row'>
        <div className='col-12 my-4 bg-white shadow p-3'>
        <IncomeChart/>
        </div>
    </div>
</div>
 </div>
 <div className='col-4 bg-white shadow'>
<BarChart2/>
 </div>
</div>
    </>
  )
}

export default HomePage