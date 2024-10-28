import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Heder from './components/Heder';
import Paragraph from './components/Paragraph';
import Footer from './components/Footer';
import Home from './components/Home';
import { useState } from 'react';

function App() {
  const[name, setName]= useState("Shirel");
  const navigate = useNavigate();
  const handleChangeName = () => {
    setName("Itamar");
    navigate('/heder');
  };
  return (
    <div className="App">
     <NavBar/>
      <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/heder" element={<Heder text={name} />} />
          <Route path="/paragraph" element={<Paragraph onClick={handleChangeName}/>} />
      </Routes>
    <Footer/>
    </div>
  );
}

export default App;
