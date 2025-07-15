import React, { useState } from 'react'
import Navbar from './Navbar'

const Delete = () => {
    const [input,changeInput]=useState(
        {"ID":""}
    )

    const inputHandler =(event)=>{
        changeInput({...input,[event.target.name]:event.target.value})
    }

    const readValue =()=>{
        console.log(input)
    }
  return (
    <div>
        <Navbar /><br></br>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div class="card text-center bg-danger">
  <div class="card-body">
    <h5 class="card-title">Delete all Details Here.....!</h5>
    <p class="card-text">make sure to enter ID to delete.</p></div>
</div><br></br>
                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                        <input type="text" className="form-control" name='ID' placeholder='Enter ID to delete' value={input.ID} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                        <button className="btn btn-danger" onClick={readValue}>Delete</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Delete