import React from 'react'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" >
  <div className="container-fluid ">
    <a className="navbar-brand text-dark" >Navbar</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link text-dark" aria-current="page" href="#">News Daily</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="/link">Link</a>
        </li>
      </ul>
      <htmlform class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </htmlform>
    </div>
  </div>
</nav>
  )
}

export default Navbar;


