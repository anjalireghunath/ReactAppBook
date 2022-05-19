import React, { useState } from 'react'

const Login = () => {
    var [username,setUsername]=useState("")
    var [password,setPassword]=useState("")
    const subData=()=>{
        const data={"username":username,"password":password}
        console.log(data)
    }
  return (
    <div>

<div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">UserName</label>
                    <input onChange={(y)=>{setUsername(y.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Password</label>
                    <input onChange={(y)=>{setPassword(y.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={subData} class="btn btn-primary">LOGIN</button>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <a href="register.js">New user click here</a>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Login