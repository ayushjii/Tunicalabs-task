import React from 'react';
import './App.css';
// import Sign from './components/Signuppage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Detail from './components/Content';
import './App.css';
import Sidebar from './components/Sidebar';
import Add from './pages/Add.jsx';
import Navbaruser from './components/Navbaruser';
import View from './pages/View.jsx';


function App() {
  return (
    <Router>
    {/* <Route exact path="/sign" element={<Sign />} />
    <Route path="/" element={<Detail />} /> */}
    <Navbaruser />
    <Sidebar> 
  <Routes>
    <Route path="/" element={<View />} />
    <Route path="/add" element={<Add />} />
  </Routes>
</Sidebar>
  </Router>
  );
}

export default App;



