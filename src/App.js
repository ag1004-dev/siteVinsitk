import React, { useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';

import Login from './pages/Login';

import Routes from './Routes';




function App() {

  const [user, setUser] = useState(null);

/*

if (user === null){
  return(
   
    <Login onLogin={(username, password) => setUser(username === 'Admin' && password === 'Admin' ? username : null)} />

  );
}
*/
  return (
    <BrowserRouter>
      <Header />

      <Routes />

      <Footer />
    </BrowserRouter>
  );
}

export default App;