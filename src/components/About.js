import React from 'react'
import { Link } from 'react-router-dom'

function About() {
   return (
      <div id="aboutUs" className="container mt-5">
         <div className="row clearfix">
            <div className="col-md-6 col-sm-12">
               <img src={window.location.origin + '/assets/images/lawyersCircle.png'} alt="about us" className="img-fluid" data-aos="fade-right" data-aos-duration="1000"/>
            </div>
            <div className="col-md-6 col-sm-12 m-auto">
               <div className="ms-5 align-middle">
                  <p className="border-left-color display-6 ">Circa noi</p>
                  <p>Il nostro gruppo coinvolge più persone competenti e motivate, che forniscono maggiori risorse, idee ed energie rispetto ad una sola persona.
                     La squadra crea ed individua prospettive multiple su come soddisfare un’esigenza o raggiungere uno scopo, cercando diverse alternative per ogni situazione.</p>
                  <p>Ognuno di noi condivide il merito per le vittorie e le responsabilità per le sconfitte, favorendo una genuina umiltà e un senso comunitario autentico.</p>
                  <br />
                  <Link to="/about" className="btn waves-effect waves-light primary-color gradient-blue-shadow">Leggere di più</Link>
               </div>
            </div>
         </div>
      </div>
   )
}

export default About
