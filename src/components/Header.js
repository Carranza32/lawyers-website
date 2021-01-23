import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
   return (
      <header className="gradient-purple-blu bg-dark">
         <div className="header-content">
            <div className="row mt-5">
               <div className="col-sm-12 col-md-6">
                  <h1 className="display-1">Kairos</h1>
                  <p className="h4 text-muted">"Uno è un numero troppo piccolo per raggiungere la grandezez"</p>
                  <p className="mt-5 "><Link to="/about" className="btn waves-effect waves-light primary-color gradient-blue-shadow">Circa noi</Link></p>
               </div>
            </div>
         </div>
      </header>
   )
}

export default Header
