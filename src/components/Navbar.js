import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
   return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
         <div className="container-fluid">
         <Link className="navbar-brand " to="/home">
            Kairos
         </Link>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
               <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" aria-current="page" to="home">Home</NavLink>
               </li>
               <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/about">Circa noi</NavLink>
               </li>
               <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/services">Servizi</NavLink>
               </li>
               <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/contact">Contatti</NavLink>
               </li>
            </ul>
         </div>
         </div>
      </nav>
   )
}

export default Navbar
