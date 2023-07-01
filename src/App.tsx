import React, { useCallback, useState } from 'react';
import logo from './logo.svg';


import './App.css';
import { Countdown } from './components/countdown';

function App() {
  const decodeInfoMap = useCallback((infoMap: string | null) => {
    return JSON.parse(atob(infoMap || ""))
  }, [])

  const [infoMap] = useState(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const infoQueryParamsBase64 = urlParams.get("info");
    return decodeInfoMap(infoQueryParamsBase64) || {
      date: new Date(2023, 9, 1),
      description: "Resgatar stocks!",
    }
  });

  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>{infoMap.description}</div>
      <Countdown time={infoMap.date}/>
    </div>
  );
}

export default App;
