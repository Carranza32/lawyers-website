import React from 'react'
import { Link } from 'react-router-dom'

function Best() {
   return (
      <div id="best" className="mt-5 overflow-hidden">
         <div className="row">
            <div className="col-sm-12 col-md-6 p-0">
               <img src={window.location.origin + "/assets/images/legal-5293009_1920.jpg"} alt="" className="img-fluid" />
            </div>
            <div className="col-sm-12 col-md-6 primary-color p-5 background-points">
               <p className="display-6">FORMULE DI PAGAMENTO</p>
               <p className="">La nostra squadra, sempre attenta ai tempi, che cambiano, ed alle situazioni economiche dei nostri utenti, è in grado di offrire la soluzione di pagamento che meglio si adatta ad ognuno, personalizzando la formula, contenuta in un accordo ad hoc.</p>
               <p className="">"Il primo contatto sarà gratuito, e, poi, Ti prenderemo per mano per
                  ridarTi tranquillità. Sarà sufficiente entrare a fare parte della
                  nostra "Grande Famiglia", con una semplice iscrizione annuale senza
                  tacito rinnovo, ad un costo decisamente vantaggioso, considerati i
                  servizi abbinati, che riguardano tutti i settori della nostra attività
                  professionale, nonchè la possibilità di ottenere la consulenza e
                  l'assistenza dei nostri esperti ad un costo convenzionato, più basso
                  di quello usualmente applicato."
                  </p>
                  <Link to="/contact" type="button" className="btn btn-dark btn-dark btn-rounded">Contattaci</Link>
            </div>
         </div>
      </div>
   )
}

export default Best
