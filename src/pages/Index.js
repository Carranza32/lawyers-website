import { Fragment, useEffect } from "react";
import Header from "../components/Header";
import About from "../components/About";
import ServiceCard from "../components/ServiceCard";
import Best from "../components/Best";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { lista } from "../utils/ServicesList";

function Index() {
   const nuevaLista = lista.filter((s) => s.id <= 3);
   
  return (
      <Fragment>
         <Header />
         <About />

         <div id="servicios" className="container mt-5" data-aos="fade-left" data-aos-duration="1000">
            <p className="border-left-color display-6 ">Servizi</p>
            <div className="row card-group mt-5">
               {               
                  nuevaLista.map(item => (
                     <ServiceCard key={item.id} col="col-sm-12 col-md-6 col-lg" isSmall={true} title={item.name} description={item.description}/>
                  ))
               }
            </div>
         </div>

         <Best />
         <div className="row mx-0 mb-5">
            <div className="col background-big-square">
               <ContactForm />
            </div>
         </div>
         <Footer />
      </Fragment>
  );
}

export default Index;
