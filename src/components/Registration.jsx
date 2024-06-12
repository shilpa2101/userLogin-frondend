import axios from 'axios'
import React, { useState } from 'react'

const Registration = () => {
    const [datas,changedata]=useState(
        {
            "name":"",
            "dob":"",
            "bloodgroup":"",
            "mob":"",
            "address":"",
            "pincode":"",
            "district":"",
            "place":"",
            "email":"",
            "username":"",
            "password":"",
            "confirmpassword":""

        }
    )
    
    const inputHandler=(event)=>{
        changedata({...datas,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(datas)
        if(datas.password == datas.confirmpassword)
            {
        axios.post("http://localhost:8085/add ",datas).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("success")
                } else {
                    alert("error")
                }
            }
        ).catch()
        
    }
    else{
        alert("password mismatch")
    }
    
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">NAme</label>
                            <input type="text" className="form-control" name='name' value={datas.name} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">DOB</label>
                            <input type="date" name="dob" value={datas.dob}  onChange={inputHandler} id="" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Blood group</label>
                            <select name="bloodgroup" value={datas.bloodgroup}  onChange={inputHandler} id="" className="form-control">
                                <option value="A+">A+</option>
                                <option value="B+">B+</option>
                                <option value="O+">O+</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Mob no</label>
                        <input type="text" className="form-control" name='mob' onChange={inputHandler} value={datas.mob}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Address</label>
                        <input type="text" className="form-control" name='address'  onChange={inputHandler} value={datas.address}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Pincode</label>
                        <input type="text" className="form-control" name='pincode'  onChange={inputHandler} value={datas.pincode}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">District</label>
                            <select name="district" value={datas.district}   onChange={inputHandler} id="" className="form-control">
                                <option value="TVM">TVM</option>
                                <option value="Kollam">Kollam</option>
                                <option value="PTA">PTA</option>
                                <option value="Alapuzha">ALapuzha</option>
                                <option value="Kottayam">Kottayam</option>
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Place</label>
                        <input type="text" className="form-control" name='place'  onChange={inputHandler} value={datas.place}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Email</label>
                        <input type="email" name='email' value={datas.email}  onChange={inputHandler} id="" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Username</label>
                        <input type="text" className="form-control" name='username'  onChange={inputHandler} value={datas.username} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Password</label>
                        <input type="password" name="password" value={datas.password}  onChange={inputHandler} id="" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Confirm password</label>
                       <input type="password" name="confirmpassword" value={datas.confirmpassword}  onChange={inputHandler} id="" className="form-control" />
                        </div>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                       <button className="btn btn-success" onClick={readValue}>Register</button>
                       <a href='/'><button className="btn btn-primary" >Login</button></a>
                    </div>

                    </div>
                </div>
            </div>
        </div>
   
  )
}

export default Registration