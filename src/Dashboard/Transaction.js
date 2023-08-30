import React from 'react'
import userContext from '../context/ContextCreate';
import { useContext,useState} from 'react';

import Img from "../Image/download.png";
import "./Dashboard.css";
import AddBudget from './AddBudget';
const Transaction = () => {
    const {data,handleDelete}  = useContext(userContext)
  
  return (
   <>
  <div className='d-flex justify-content-between align-items-center' >
  <h1 className='ms-5 mt-3'>Transaction List</h1>
    <AddBudget/>
  </div>
    <div className='container'>
  <div className='row'>
<div className='col-10 offset-1 '>
<h4 className='ms-5 mt-3'>Expense List</h4>
{data.Transaction.length > 0 ? <table className="table table-striped table-hover border border-secondary">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Date</th>
      <th scope="col">Expense Type</th>
      <th scope="col">Amount</th>
      <th scope="col">button</th>
    </tr>
  </thead>
  <tbody>
{data?.Transaction?.map(({name,amount,dates,id},index) => (
<tr key={id}>
<th scope="row">{index + 1}</th>
<td>{dates}</td>
<td>{name}</td>
<td>Rs. {amount}</td>
<td> <button className='btn btn-danger' onClick={() => handleDelete(id)}>delete</button></td>
</tr>
))}
</tbody> 
</table>
: <img src={Img} height={300} width={300} className='m-auto no-image'/>
}
<h4 className='ms-5 mt-3'>Income List</h4>
{data.Transaction.length > 0 ? <table className="table table-striped table-hover border border-secondary">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Date</th>
      <th scope="col">Income Type</th>
      <th scope="col">Amount</th>
      <th scope="col">button</th>
    </tr>
  </thead>
  <tbody>
{data?.Transaction2?.map(({name,amount,dates,id},index) => (
<tr key={id}>
<th scope="row">{index + 1}</th>
<td>{dates}</td>
<td>{name}</td>
<td>Rs. {amount}</td>
<td> <button className='btn btn-danger' onClick={() => handleDelete(id)}>delete</button></td>
</tr>
))}
</tbody> 
</table>
: <img src={Img} height={300} width={300} className='m-auto no-image'/>
}
</div>
 </div>
  </div>

   </>
  )
}

export default Transaction


