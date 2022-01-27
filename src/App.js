import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app__body">
        <Main />
      </div>
    </div>
  );
}

export default App;
