import React, { useState } from 'react'

const Register = () => {
    var [names,setNames]=useState("")
    var [email,setEmail]=useState("")
    var [username,setUsernme]=useState("")
    var [password,setPass]=useState("")
    var [Confirmpass,setConfirm]=useState("")
    const readData=()=>{
        const data={"name":names,"email":email,"username":username,"password":password,"confirmpass":Confirmpass}
        console.log(data)
    }
  return (
    <div>

<div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Name</label>
                    <input onChange={(x)=>{setNames(x.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Email</label>
                    <input onChange={(x)=>{setEmail(x.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Username</label>
                    <input onChange={(x)=>{setUsernme(x.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Password</label>
                    <input onChange={(x)=>{setPass(x.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Confirm Password</label>
                    <input onChange={(x)=>{setConfirm(x.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={readData} class="btn btn-primary">Register</button>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <a href="/">Back To Login</a>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Register