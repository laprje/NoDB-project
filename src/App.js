import React from 'react';
import './App.css';
import Header from './components/Header';
// import Roster from './components/Roster'
// import Player from './components/Player';
// import Adder from './components/Adder';
import routes from './routes';

function App() {
  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  );
}

export default App;
