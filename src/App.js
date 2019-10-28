import React from 'react';
import './App.css';
import Header from './components/Header';
import routes from './routes';
import Logo from './components/Logo'

function App() {
  return (
    <div className="App">
      <Header />
      {routes}
      <Logo />
    </div>
  );
}

export default App;
