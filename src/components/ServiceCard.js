import React from 'react'
import { Link } from 'react-router-dom';

function ServiceCard({col, isSmall, title, description}) {
   let style = {
      width: 18+'rem',
      height: 24+'rem',
   };
   let truncateDescript = {
      height: 10+'rem',
      overflow: 'hidden'
   };

   if (!isSmall) {
      style = null;
      truncateDescript = null;
   }

   return (
      <div className={col+` center card-group`} >
         <div className="card custom-card-shadow quick-info-cards mb-5 pb-2" style={style}>
            <div className="card-img-top m-3 text-center">
               <i className="fa fa-balance-scale"></i>
            </div>
            
            <div className="card-body">
               <h5 className="card-title">{title}</h5>
               <p className="card-text text-justify" style={truncateDescript}>{description}</p>
            </div>
            <div className="card-footer border-0">
               <Link to="/services" className="card-link primary-color-text">Leggere di più</Link>
            </div>
         </div>
      </div>
   )
}

export default ServiceCard
