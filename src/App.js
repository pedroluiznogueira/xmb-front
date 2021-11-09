import React, { useEffect, useState } from 'react';
import './App.css';
import AerodromeComponent from './components/AerodromeComponent';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { getAerodromes, setItem } from './services/AerodromeService';

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAerodromes()
      .then(aerodromes => {
        if(mounted) {
          setList(aerodromes)
        }
      })
    return () => mounted = false;
  }, [])

  return(
    <>
      <div className="header">
        <a href="#default" className="logo">CompanyLogo</a>
        <div className="header-right">
          <a className="active" >Home</a>
          <a >Contact</a>
          <a >About</a>
        </div>
      </div>

      <div className="wrapper">
        <h1>Aerodromes</h1>
        <AerodromeComponent />
      </div>
    </>
  )
}

export default App;