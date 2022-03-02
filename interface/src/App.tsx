import React from 'react';
import './App.css';

import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

import { Outlet } from 'react-router-dom';


const App: React.FC = () => {
  return (
    <div className='app'>
      
      <Header />
      <Outlet />
      <Main />
  
      <Footer />
    </div>
  );
};

export default App;
