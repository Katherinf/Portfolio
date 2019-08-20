import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar.js';
import background from './backround-img.jpg';

function App() {
  return (
    <div>
      <header className="App-header">
      <img className='background-img' src={background} alt='tecnology picture' />
        <Navbar></Navbar>  
      </header>
      <div>
      <p>Hi, I'm Katherin. </p>
    </div>
    <div>
      <p>Want to know more about me?</p>
    </div>
  </div>
  );
}

export default App;
