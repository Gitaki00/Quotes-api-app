import React from 'react'
import Navbar from './Navbar'

const Search = () => {
  return (
    <div>
        <Navbar /><br></br>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <div class="card text-center bg-primary">
  <div class="card-body">
    <h5 class="card-title">Search all Details Here.....!</h5>
    <p class="card-text">make sure to enter ID to search.</p></div>
</div><br></br>
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                        <input type="text" className="form-control" placeholder='Enter ID to search'/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                        <button className="btn btn-primary">search</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search