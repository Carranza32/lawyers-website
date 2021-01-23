import React, { Fragment } from 'react'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

function Contacts() {
   return (
      <Fragment>
         <div className="row banner background-points h-500 mx-0">
            <div className="col-12 my-auto text-center">
               <h3 className="display-5">Contatti</h3>
               <p className="text-mute lead h3">Per fissare un appuntamento con i nostri esperti</p>
            </div>
         </div>

         <div className="row mx-0 mb-5">
            <div className="col mt-5">
               <div className="text-cente">
                  <ul className="mx-auto float-end list-group list-group-flush" style={{width: 'max-content'}}>
                     <li className="list-group-item">
                        <i className="fs-6 fa fa-home me-2"></i>
                        <span>Alessandria (c.a.p. 15121)</span>
                        <p className="text-muted"> - Via Mario Maggioli n. 41</p>
                     </li>
                     <li className="list-group-item">
                        <i className="fs-6 fa fa-home me-2"></i>
                        <span>Casale Monferrato (c.a.p. 15033)</span>
                        <p className="text-muted"> - Via Candiani d’Olivola n. 9</p>
                     </li>
                     <li className="list-group-item">
                        <i className="fs-6 fa fa-clock me-2"></i>
                        <span>Dal lunedi al venerdì</span>
                        <p className="text-muted">Orari: 8.30-12.30 | 14.00-18.00</p>
                     </li>
                     <li className="list-group-item">
                        <i className="fs-6 fa fa-envelope me-2"></i>
                        <span>sportelloconsulenze@gmail.com</span>
                        <p className="text-muted">Send us your query anytime!</p>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="col-sm-12 col-md-6 background-big-square">
               <ContactForm />
            </div>
         </div>

         <div className="container mb-5">
            <div className="row">
               <div className="col border border-2 rounded-3">
                  <p className="blockquote text-muted text-justify">Per le questioni urgenti siamo sempre disponibili, entro le 48 ore dopo la richiesta di appuntamento, nella sede dell’ufficio o attraverso consulenza a distanza tramite videochiamata, Skype o Zoom.</p>
               </div>
            </div>
         </div>
         <Footer />
      </Fragment>
   )
}

export default Contacts
