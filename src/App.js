import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Home from './components/Home';

function App() {
  return (

   <div>
     <h1 className="text-center">My Volunteer Friends</h1>
     <Home></Home>
   </div>
  );
}

export default App;
