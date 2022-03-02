import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './index.css';

import App from './App';
import Fighters from './Components/Fighters/Fighters';
import Leaderboard from './Components/Leaderboard/Leaderboard'

//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='fighters' element={<Fighters />} />
          <Route path='leaderboard' element={<Leaderboard />} />
        </Route>
        <Route
          path='*'
          element={
            <div className='gotLost'>
              <h4>There's nothing here!</h4>
              <button>
                <Link to='/'>Go Home</Link>
              </button>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
