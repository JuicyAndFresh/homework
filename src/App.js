import React from "react";
import './App.css';
import Home from './routes/Home';
import {HashRouter, Routes, Route} from 'react-router-dom;'
import About from './routes/About';
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";

function App() {
  return(
    <HashRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/movie-detail" element={<Detail/>} />
      </Routes>
    </HashRouter>
  );
}
function About() {
  return <span>About this page: I built it because I love movies.</span>
}
export default App;
