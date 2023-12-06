import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Trang2 from './nodung/trang2';


const App = () => {
  return (
    <Router>
      
        <Routes>
          <Route  path="/" element={<Home/>} />
          <Route  path="/noidung" element={<Trang2/>} />
         
        </Routes>
    </Router>
  );
};

export default App;