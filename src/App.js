import React from 'react'

import './app.scss';

import Renderlist from './components/Renderlist/Renderlist';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';



function App() {


  return (  
         
       <div className="Apps">
           <Navbar/>
           <Header/>
           <Renderlist/>
       </div>
      
         
       
  );
}

export default App;

