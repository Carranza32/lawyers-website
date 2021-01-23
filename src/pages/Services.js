import React, { Fragment } from 'react'
import { lista } from "../utils/ServicesList";
import ServiceCard from "../components/ServiceCard";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

function Services() {
   return (
      <Fragment>
         <div className="row banner h-500 mx-0">
            <div className="col-12 my-auto text-center">
               <h3 className="display-5">Services</h3>
               <p className="text-mute lead h3">Conoce mas de nuestra historia</p>
            </div>
         </div>

         <div id="servicios" className="container mt-5">
            <p className="border-left-color display-6 ">Servicios</p>
            <div className="row mt-5">
               {               
                  lista.map(item => (
                     <ServiceCard key={item.id} col="col-sm-12 col-md-6" isSmall={false} title={item.name} description={item.description}/>
                  ))
               }
            </div>
         </div>

         <div className="row background-points mx-0 p-5 mb-5">
            <div className="col-12 text-center text-white">
               <p className="display-5">Hai bisogno del nostro aiuto?</p>
               <Link to="/contact" className="btn btn-dark btn-dark"><i className="fa fa-envelope me-2"></i> Contattaci</Link>
            </div>
         </div>


         <Footer />
      </Fragment>
   )
}

export default Services
