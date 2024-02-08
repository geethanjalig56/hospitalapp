import React from 'react'
import Navbar from './Navbar'

const Patientform = () => {
  return (
    <div>
        <Navbar/> 
        <h2>Patient Registration Form</h2>
        <div className="container">
        <div className="row">       
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Doctor's Name: </label>
                        <select name="" id="" className="form-control">
                            <option value="manu">Manu</option>
                            <option value="oman">Oman</option>
                            <option value="jacob">Jacob</option>
                            <option value="larry">Larry</option>
                            <option value="niya">Niya</option>
                            <option value="sam">Sam</option>
                            <option value="lisa">Lisa</option>
                            <option value="mark">Mark</option>
                        </select>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Admission Date: </label> 
                        <input type="date" name="" id="" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Planned Procedure</label>
                        <select name="" id="" className="form-control">
                            <option value="manu">Surgery</option>
                            <option value="lisa">Consultation</option>
                            <option value="mark">Review</option>
                        </select>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Patient Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Phone number</label>
                         <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                       <label htmlFor="" className="form-label">Email</label>
                        <input type="email" name="" id="" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Date of Birth</label>
                        <input type="date" name="" id="" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Gender</label>
                        <select name="" id="" className="form-control">
                            <option value="single">male</option>
                            <option value="married">female</option>
                            <option value="married">others</option>
                        </select>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Marital status</label>
                        <select name="" id="" className="form-control">
                            <option value="single">single</option>
                            <option value="married">married</option>
                        </select>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Parent/Guardian Name</label>
                        <input type="text" className="form-control" />

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                       <label htmlFor="" className="form-label">Relationship to patient</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Address</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Postal zip code</label>
                        <input type="text" className="form-control" />

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">City</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                       <label htmlFor="" className="form-label">Date</label>
                       <input type="date" name="" id="" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success">submit</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Patientform