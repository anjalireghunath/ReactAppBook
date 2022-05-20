import React, { useState } from 'react'
import Header from './Header'

const AddBook = () => {
    var [bookname,setBookName]=useState("")
    var [author,setAuthor]=useState("")
    var [price,setPrice]=useState("")
    const addData=()=>{
        const data={"bookname":bookname,"author":author,"price":price}
        console.log(data)
    }
  return (
    <div>
<Header/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">BookName</label>
                    <input onChange={(s)=>{setBookName(s.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Author</label>
                    <input onChange={(s)=>{setAuthor(s.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Price</label>
                    <input onChange={(s)=>{setPrice(s.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={addData} className="btn btn-success">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default AddBook