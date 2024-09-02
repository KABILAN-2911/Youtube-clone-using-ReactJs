import React from 'react'

export default function() {
  return (
    <div>

    <div class="row mt-2">
      <div class="col-1">
      <i class="fa-solid fa-bars ms-4 mt-1 fs-3"></i>
      </div>
      <div className='col-2 d-flex'>
      <i class="fa-brands fa-youtube fs-3 mt-1 text-danger"></i>
      <p className='fw-bold h5 mt-1 ms-1'>YouTube</p>
      </div>
      <div className="col-5">
    
  
    <form class="d-flex" role="search">
        <div className='container d-flex rounded-pill border border-secondary'>
      <input class="form-control border border-start-0 " type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn " type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
      </div>
    </form>


      </div>
      </div>    
  </div>

  )
}
