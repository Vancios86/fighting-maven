import React from 'react';
import './App.css';

import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';


const App: React.FC = () => {
  return (
    <div className='app'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
