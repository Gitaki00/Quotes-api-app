import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const View = () => {

    const [isLoading, chgIsLoading] = useState(true)


    const [quoteData, changeQuoteData] = useState(
        {
            "quotes": [],
            "total": 1454,
            "skip": 0,
            "limit": 30
        }
    )
    const fetchData = () => {
        axios.get("https://dummyjson.com/quotes").then(
            (response) => {

                changeQuoteData(response.data)
                chgIsLoading(false)
            }
        ).catch()
    }
    useEffect(() => { fetchData() }, {})
    return (
        <div>
            <Navbar /><br></br>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div class="card text-center bg-warning">
                            <div class="card-body">
                                <h5 class="card-title">View all Details Here.....!</h5>
                                <p class="card-text">All the details are given in a tabular form.</p></div>
                        </div><br></br>
                        <div className="row g-3">
                            {isLoading ? <div class="d-flex align-items-center">
                                <strong role="status">Loading...</strong>
                                <div class="spinner-border ms-auto" aria-hidden="true"></div>
                            </div> : ( <>
                            
                                {quoteData.quotes.map(
                                    (value, index) => {
                                        return (
                                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                                                <div class="card flex-fill h-100">
                                                    <div class="card-body">
                                                        <h5 class="card-title">{value.id}</h5>
                                                        <p class="card-text">{value.quote}</p>
                                                        <p class="card-text">{value.author}</p>

                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                )}
                                </>
                            )
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View