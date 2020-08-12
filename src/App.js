import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import Main from './components/MainComponent';

function App() {
  return (
    <HashRouter >
      <div className="App">
        <Main />
      </div>
    </HashRouter>
  );
}

export default App;
