import React from 'react'

import "../App.css"
function Navbar() {
  
  return (
    
    
    <nav class="navbar navbar-expand-lg"  data-bs-theme="dark" style={{backgroundColor: "#66C6BD"}}>
  <div class="container-fluid">
    <a class="navbar-brand" >Pharmacy-Manager</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Products</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/add">Add Products</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/Sales">Sales</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/addDemand">Add Demand</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/demand">Your Demand</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    
  )
}

export default Navbar