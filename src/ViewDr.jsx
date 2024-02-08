import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewDr = () => {
  const [data,setData] = new useState(
    [
      {"id":"101","dr":"rahul","dept":"oncology","wd":"mon,wed"},
      {"id":"103","dr":"mia","dept":"cardiology","wd":"mon,tue"},
      {"id":"102","dr":"siya","dept":"neurology","wd":"mon,fri"},
      {"id":"106","dr":"dylan","dept":"oncology","wd":"mon,thurs"},
    ]
    )
  return (
    <div>
        <Navbar/>
        <h1> MEET OUR DOCTORS</h1>
       <table class="table table-bordered">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Doctor's ID</th>
      <th scope="col">Doctor</th>
      <th scope="col">Dept</th>
      <th scope="col">Working Days</th>
    </tr>
  </thead>
  <tbody>
    {
      data.map(
        (value,index)=>{
          return <tr>
          <th scope="row">{value.id}</th>
          <td>{value.dr}</td>
          <td>{value.dept}</td>
          <td>{value.wd}</td>
        </tr>
        }
      )
    }
    
  </tbody>
</table>
    </div>
  )
}

export default ViewDr