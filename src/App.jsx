import { BrowserRouter as Router ,Route ,Routes, Link } from 'react-router-dom';
import React from 'react';
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'



function App() {
  

  return (
    <>
    <Router>
      <header>
       
          <nav>
            <ul className='flex flex-row text-center font-bold gap-3'>
              <li>
                <Link to="/">Home</Link>
              </li>
            
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      
      </header>
    </Router>
  

    </>
  )
}

export default App
