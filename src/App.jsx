import { BrowserRouter as Router ,Route ,Routes, Link } from 'react-router-dom';
import React from 'react';
import './App.css'
import Homepage from './components/Homepage';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import AuthRoute from './Pages/AuthRoute';


function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<AuthRoute/>} >
          <Route path="/" element={<Signin/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Route>

        <Route path="/" element={<Homepage/>}>
          <Route exact path="/homepage" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Route>

      </Routes>
    </Router>
  

    </>
  )
}

export default App
