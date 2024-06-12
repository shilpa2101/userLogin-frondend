import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {
  const [datas,changedata]=useState(
    {
        "username":"",
        "password":""
    }
)

const inputHandler=(event)=>{
    changedata({...datas,[event.target.name]:event.target.value})
}
const readValue=()=>{
    console.log(datas)

}
  return (
    <div>
        <div className="container">
          <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <label htmlFor="" className="form-label">Username</label>
              <input type="text" className="form-control" name='username' value={datas.username} onChange={inputHandler}/>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <label htmlFor="" className="form-label">Password</label>
              <input type="text" className="form-control" name='password' value={datas.password} onChange={inputHandler}/>
            </div>
          </div>
        </div>
        <a href='/register'><button className="btn btn-primary">Register</button></a>
      <button className="btn btn-primary" onClick={readValue}>Login</button>
    </div>
  )
}

export default Login