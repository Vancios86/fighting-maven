import React from 'react';
import Header from './Components/Header/Header';

import './App.css';

const App: React.FC = () => {
  return (
   <div className="app">
     <Header />
     <div className='title'>Fighting Maven!!!</div>
     
   </div>
  );
}

export default App;
