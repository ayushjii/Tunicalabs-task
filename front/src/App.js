import React from 'react';
import './App.css';
import Sign from './components/Signuppage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from './components/Content';




function App() {
  return (
    <Router>
    <Routes>
    <Route exact path="/" element={<Sign />} />
    <Route path="/detail" element={<Detail />} />
  </Routes>
  </Router>
  );
}

export default App;
