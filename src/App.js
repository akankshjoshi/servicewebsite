import React from 'react';
import './App.css';
import Contactus from './contactus/contactus';
import Landingpage from './landingpage/landingpage';
import Services from './services/services';
import Career from './career/career';
import Aboutus from './aboutus/aboutus';
import {Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Routes>
        <Route path ='/' exact element={<Landingpage/>}/>
        <Route path='contactus' exact element={<Contactus />}/>
        <Route path='services' exact element={<Services />}/>
        <Route path='career' exact element={<Career />}/>
        <Route path='aboutus' exact element={<Aboutus/>}/>
        </Routes>
    </div>
  );
}

export default App;
