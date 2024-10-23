// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About/About'; // Updated import statement
import RoomsPage from './pages/RoomsPage';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero'; 
import './App.css'; 

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <About /> {/* Update component reference */}
        <Routes>
          <Route path="/" element={<RoomsPage />} />
        </Routes>
        <Gallery />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
