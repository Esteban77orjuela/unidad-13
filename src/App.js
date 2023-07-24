import React from 'react';
import './App.css';
import Listado from './components/Listado';
import Detail from './components/Detail';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Listado />
      <Detail />
      <Login />
    </div>
  );
}

export default App;
