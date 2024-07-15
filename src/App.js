import Spline from '@splinetool/react-spline'; // Import Spline
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Spline scene="https://prod.spline.design/78Ldjfp770bmw7rD/scene.splinecode" /> {/* Add Spline component */}
      </header>
    </div>
  );
}

export default App;
