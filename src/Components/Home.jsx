import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
        <Navbar />
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://i.pinimg.com/736x/b3/60/dc/b360dc361dc57c0524e61d9a92b9ad26.jpg" class="d-block w-100" height={550}></img>
    </div>
    <div class="carousel-item">
      <img src="https://i.pinimg.com/1200x/dc/84/ab/dc84abf0a1249a5ff3f9ada8e724c9e5.jpg" class="d-block w-100" height={550}></img>
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Home