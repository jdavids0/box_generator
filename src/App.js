// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import GenerateBox from './components/GenerateBox'
import DisplayBox from './components/DisplayBox'

function App() {
  const [currentColor, setCurrentColor] = useState([]);

  const addedBox = ( newColor ) => {
    setCurrentColor([ ...currentColor, newColor]);
  }

  return (
    <div className="App body">
      <div>
        <GenerateBox onNewBox={ addedBox } />
        <DisplayBox box={ currentColor } />
      </div>
    </div>
  );
}

export default App;
