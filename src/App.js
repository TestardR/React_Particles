import React from 'react';
import './App.css';
import Particles from 'react-particles-js';

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

function App() {
  return <Particles params={particlesOptions} />;
}

export default App;
