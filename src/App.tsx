import React from 'react';
import logo from './logo.svg';


import './App.css';
import { Countdown } from './components/countdown';

function App() {

  const time: Date = new Date(2023, 1, 07);

  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Countdown time={time}/>
    </div>
  );
}

export default App;
