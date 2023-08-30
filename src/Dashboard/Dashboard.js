import React from 'react'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar';
import "./Dashboard.css"
import AddBudget from "./AddBudget";
import HomePage from './HomePage';
import Transaction from './Transaction';
import { useState } from 'react';

const Dashboard = () => {
  const [Active, setActive] = useState(false)
  const changePage = () =>{
     setActive(true)
  }
  return (
    <div className='container-fluid'>
   <div className='row'>
 <div className='col-2 bg-primary'>
<Sidebar changePage={changePage} setActive={setActive}/>
 </div>
    <div className='col-10 p-0 bg-color'>
<Navbar/>
{Active ? <Transaction/>:<HomePage />}
    </div>
   </div>
    </div>
  )
}

export default Dashboard
