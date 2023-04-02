import './App.css';
import Header from './components/header/Header'
import Body from './components/body/Body'
import React from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  const [ talentId, setTalentId ] = React.useState('')
  return (
    <main>
      <Header />
      <Outlet context={[talentId, setTalentId]}/>
    </main>

  );
}

export default App;
