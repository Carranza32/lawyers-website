import React, { Fragment } from 'react'
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

function AboutUs() {
   return (
      <Fragment>
         <div className="row banner h-500 mx-0">
            <div className="col-12 my-auto text-center">
               <h3 className="display-5">CHI SIAMO</h3>
               <p className="text-mute lead h3">Conoce mas de nuestra historia</p>
            </div>
         </div>

         <div className="container mt-5">
            <div className="row mx-0" data-aos="fade-right" data-aos-duration="1000">
               <p className="border-left-color display-6">CHI SIAMO</p>
               <div className="col-sm-12 col-md-6">
                  <p className="text-muted h4">Bella domanda!</p>
                  <p className="fs-6">
                     lavorare in gruppo è nata dalla convinzione che si possano produrre dei risultati incredibili, interagendo insieme verso un obiettivo comune.
                     Per quanto si possano ammirare i vincitori solitari, la pura verità è che nessuno da solo è in grado di fare qualcosa di grande valore. 
                     Ci ricorda John Maxwell, nella prima delle leggi del lavoro di squadra, che “Uno è un numero troppo piccolo per raggiungere la grandezza”.
                     Del resto, non c’è nessun problema che non possiamo risolvere insieme, ma molto pochi che possiamo risolvere da soli.
                     La verità è che il cuore di ogni grande risultato è sempre una squadra. E, quindi, eccoci qui!
                     Il nostro gruppo coinvolge più persone competenti e motivate, che forniscono maggiori risorse, idee ed energie rispetto ad una sola persona.
                     La squadra crea ed individua prospettive multiple su come soddisfare un’esigenza o raggiungere uno scopo, cercando diverse alternative per ogni situazione.
                  </p>
               </div>
               <div className="col-sm-12 col-md-6 m-auto">
                  <img src={window.location.origin + '/assets/images/right-4703944_1920.jpg'} alt="about us" className="img-fluid shadow-lg custom-card-shadow" />
               </div>
            </div>
         </div>

         <div className="container mt-5">
            <div className="row mx-0" data-aos="fade-left" data-aos-duration="1000">
               <div className="col-sm-12 col-md-6 m-auto">
                  <img src={window.location.origin + '/assets/images/right-4944555_1920.jpg'} alt="about us" className="img-fluid shadow-lg custom-card-shadow" />
               </div>
               <div className="col-sm-12 col-md-6">
                  <p className="fs-6">
                     Ognuno di noi condivide il merito per le vittorie e le responsabilità per le sconfitte, favorendo una genuina umiltà e un senso comunitario autentico.
                     Altro importante fattore del nostro successo è che vi sia un’etica condivisa, non solo fra le persone che costituiscono il gruppo, ma anche fra le persone esterne che si occupano dell’organizzazione, oltre alla disponibilità di strumenti di lavoro, tecnologia e un ambiente di lavoro nel suo complesso armonioso, dove le persone possano sentirsi a proprio agio. 
                     Le parole chiave della nostra squadra: ASCOLTO ATTIVO E COMPETENZA.

                     Noi ascoltiamo in maniera attiva; dedichiamo la maggior parte delle nostre risorse a comprendere il messaggio che l’altra persona vuole trasmetterci, perché solo in questo modo potremo soddisfare le aspettative ed ottenere il risultato corretto e voluto.
                     Le competenze della nostra squadra non corrispondono ad una semplice sommatoria di conoscenze, capacità o atteggiamenti, ma all'integrazione di queste componenti, che ci permettono di affrontare situazioni problematiche, prendere decisioni ponderate, valutando i differenti aspetti.
                     Supera con noi le difficoltà, le crisi, i problemi , concedici il privilegio di trovare il bandolo della matassa , afferra il nostro “FILO DI ARIANNA”  ; noi,  Ti aspettiamo, NON RIMANERE DA SOLO.
                  </p>
               </div>
            </div>
         </div>

         <section className="row background-points mx-0 p-5">
            <div className="col-12 my-auto text-center text-white border">
               <div className="container my-5">
               <div className="row">
                  <div className="col-sm-12 col-md-4">
                     <div className="">
                        <div className="card-img-top fs-3 mb-3">
                           <i className="fa fa-balance-scale"></i>
                        </div>
                        <p className="h1">Una Squadra</p>
                        <p>La scelta di lavorare in gruppo è nata dalla convinzione che si possano produrre dei risultati incredibili, interagendo insieme verso un obiettivo comune.</p>
                     </div>
                  </div>
                  <div className="col-sm-12 col-md-4">
                     <div className="">
                        <div className="card-img-top fs-3 mb-3">
                           <i className="fa fa-balance-scale"></i>
                        </div>
                        <p className="h1">La nostra filosofia</p>
                        <p>Por mucho que admiremos a los ganadores solitarios, la verdad es que nadie es capaz de hacer nada de gran valor por sí solo.</p>
                     </div>
                  </div>
                  <div className="col-sm-12 col-md-4">
                     <div className="">
                        <div className="card-img-top fs-3 mb-3">
                           <i className="fa fa-balance-scale"></i>
                        </div>
                        <p className="h1">La chiave del successo</p>
                        <p>Ognuno di noi condivide il merito per le vittorie e le responsabilità per le sconfitte, favorendo una genuina umiltà e un senso comunitario autentico.</p>
                     </div>
                  </div>
               </div>
               </div>
            </div>
         </section>

         <div className="row mx-0 mb-5">
            <div className="col background-big-square">
               <ContactForm />
            </div>
         </div>
         <Footer />
      </Fragment>
   )
}

export default AboutUs
