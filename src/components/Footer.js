import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
   return (
      <footer className="bg-dark text-white text-center text-lg-start">
         <div className="container p-4">
            <div className="row">
               <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                  <h4 className="text-uppercase">Kairos</h4>
               </div>
         
               <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Index</h5>
         
                  <ul className="list-unstyled mb-0">
                  <li>
                     <Link to="/home" className="text-white">Home</Link>
                  </li>
                  <li>
                     <Link to="/about" className="text-white">Circa noi</Link>
                  </li>
                  <li>
                     <Link to="/services" className="text-white">Servizi</Link>
                  </li>
                  <li>
                     <Link to="/contact" className="text-white">Contatti</Link>
                  </li>
                  </ul>
               </div>

               <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase mb-0"></h5>
         
                  <ul className="list-unstyled">
                     <li>
                        <div className="">
                           <i className="fs-6 fa fa-envelope me-2"></i>
                           <span>sportelloconsulenze@gmail.com</span>
                           <p className="text-muted">Send us your query anytime!</p>
                        </div>
                     </li>
                     <li>
                        <div className="">
                           <i className="fs-6 fa fa-home me-2"></i>
                           <span>Casale Monferrato (c.a.p. 15033)</span>
                           <p className="text-muted"> - Via Candiani d’Olivola n. 9</p>
                        </div>
                     </li>
                     <li>
                        <div className="">
                           <i className="fs-6 fa fa-home me-2"></i>
                           <span>Alessandria (c.a.p. 15121)</span>
                           <p className="text-muted"> - Via Mario Maggioli n. 41</p>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default Footer
