import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Index from './pages/Index';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Contacts from './pages/Contacts';

ReactDOM.render(
   <BrowserRouter>
      <div>
         <Navbar />
         <Redirect from="/" to="/home" exact />
         <Switch>
            <Route path="/home" exact component={Index} />
            <Route path="/about" exact component={AboutUs} />
            <Route path="/services" exact component={Services} />
            <Route path="/contact" exact component={Contacts} />
         </Switch>
      </div>
   </BrowserRouter>,
  document.getElementById('root')
);
