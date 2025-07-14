import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
         <nav class="navbar navbar-expand-lg bg-body-secondary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">Quote-app</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page" to="/a">Add</Link>
        <Link class="nav-link" to="/s">Search</Link>
        <Link class="nav-link" to="/d">Delete</Link>
        <Link class="nav-link" to="/v">View</Link>
        
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar