import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    var [username,setUsername]=useState("")
    var [password,setPassword]=useState("")
    const subData=()=>{
        const data={"username":username,"password":password}
        console.log(data)
    }
  return (
    <div>

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">UserName</label>
                    <input onChange={(y)=>{setUsername(y.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Password</label>
                    <input onChange={(y)=>{setPassword(y.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <Link href='/add'> <button onClick={subData} className="btn btn-primary">LOGIN</button></Link>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <a href="/register">New user click here</a>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Login