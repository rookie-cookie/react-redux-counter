import React from 'react'
import './styles.css'
import './App.css'
import EnhancedCounter from './containers/EnhancedCounter';


function App() {
  return (
    <div className="App">
      <h1 className="App-title">
        React Redux Counter
      </h1>
      
      <EnhancedCounter />

    </div>
  );
}

export default App;
