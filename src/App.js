import './App.css';
import Header from './components/header/Header'
import Body from './components/body/Body'
import React from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>

  );
}

export default App;
