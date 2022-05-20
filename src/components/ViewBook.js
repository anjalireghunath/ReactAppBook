import React from 'react'
import Header from './Header'

const ViewBook = () => {
    var viewbook=[{"BookName":"Half Girl Friend",
                   "Author":"Chetan Bhagat",
                   "Price":"300" 
                  },
                  {
                    "BookName":"His First Flight",
                    "Author":"APJ",
                    "Price":"250" 
                  },
                  {
                    "BookName":"Xmas Carol",
                    "Author":"Mathew",
                    "Price":"150" 
                  },
                  {
                    "BookName":"My Journey",
                    "Author":"APJ",
                    "Price":"300" 
                  },
                  {
                    "BookName":"Making of New India",
                    "Author":"Bibek Debroy",
                    "Price":"400" 
                  }
                
                ]
  return (
    <div>
<Header/>
<div className='container'>
          <div className='row'>
            <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
            <div className='row g-3'>
                <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                <table class="table table-primary table-striped">
  <thead>
    <tr>
      <th scope="col">BookName</th>
      <th scope="col">Author</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    {viewbook.map((value,key)=>{
      return <tr>
      <td>{value.BookName}</td>
      <td>{value.Author}</td>
      <td>{value.Price}</td>
    </tr>
    })}
    
    
    
  </tbody>
</table>



                    </div>
               

              </div>

            </div>

          </div>

        </div>

    </div>
  )
}

export default ViewBook