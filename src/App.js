import React from "react";
import './App.css';
import Header from './components/header';
import { Route, Routes } from "react-router-dom";
import Aktualnosci from "./pages/Aktualnosci";
import Home from "./pages/Home";
import Ogloszenia from "./pages/Ogloszenia";
import Zaloguj from "./pages/Zaloguj";

const App = () => {
  return( 
    <div class="App">
    <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Aktualnosci" element={<Aktualnosci/>}/>
          <Route path="/Ogloszenia" element={<Ogloszenia/>}/>
          <Route path="/Zaloguj" element={<Zaloguj/>}/>
        </Routes>
    </div>
  );
}

export default App;