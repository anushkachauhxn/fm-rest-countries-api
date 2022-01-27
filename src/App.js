import React from 'react';
import { useSelector } from 'react-redux';
import { selectDarkMode } from './features/darkmodeSlice';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const darkmode = useSelector(selectDarkMode);

  return (
    <div className={`app ${darkmode && "darkmode"}`}>
      <Header />

      <div className="app__body">
        <Main />
      </div>
    </div>
  );
}

export default App;
