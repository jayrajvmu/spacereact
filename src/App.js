import React from 'react';
import './App.css';
import {  BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Book from './Book';
import Sidebar from './sideNav';
import './sideNav.css';
import Nopage from './Nopage';
import Mybooking from './Mybooking';
import Home from './Home';
import Wing from './Wing';
import LoadingSpinner from './Spinner'
function App() {

  return (
    <div className="App">

      <Router>
 
    <Sidebar> </Sidebar>
       <Routes>
        <Route path="/book" element={<Book />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/wing" element={<Wing />}/>
        <Route path="/mybooking" element={<Mybooking />}/>
        <Route path="/s" element={<LoadingSpinner />}/>
        <Route path="*" element={<Nopage />}/>

    </Routes>
  </Router>
    </div>
  );
}

export default App;