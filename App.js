import React from 'react';
import './App.css';
import Forecast from './components/forecast/forecast.js';
function App() {
 return (
   <div className="App">
     <header className="React Weather App">
       <h1>React Weather App</h1>
     </header>
     <main>
       <Forecast />
     </main>
     <footer>
       Page created by NISHANT VERMA
     </footer>
   </div>
 );
}

export default App;