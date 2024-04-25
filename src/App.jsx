import { BrowserRouter as Router ,Route ,Routes, Link } from 'react-router-dom';
import React from 'react';
import './App.css'
import Homepage from './components/Homepage';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';



function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/homepage" element={<Homepage/>}/>
      </Routes>
    </Router>
  

    </>
  )
}

export default App
