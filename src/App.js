import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/home';
import Main from './Components/Main/main';
import Footer from './Components/Footer/footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Main />
      <Footer /> {/* Render Footer component after Main */}
    </>
  );
}

export default App;
