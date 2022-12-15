import React from 'react';
import './App.css';
import {  BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Book from './Book';
import Navbar from './Nav';
import Popup from './Popup';
function App() {
  return (
    <div className="App">
      <Router>
        <Popup />
       <Routes>
        <Route path="/book" element={<Book />}/>
    </Routes>
  </Router>
    </div>
  );
}

export default App;