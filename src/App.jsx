import { BrowserRouter as Router ,Route ,Routes, Link } from 'react-router-dom';
import React from 'react';
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header';



function App() {
  

  return (
    <>
    <Router>
      <header className=''>
       
          <nav >
            <div className='bg-red-200 flex flex-col rounded-lg border-2 border-blue-400 ' >
          <Header/>
          <div className='flex flex-row w-full'>
            <div className='w-[30%]  '>
            <ul className='flex flex-col font-bold gap-3 pt-10 text-xl'>
              <li className='mb-5 text-blue-700'>
                <Link to="/">Home </Link>
              </li>
            
              <li className='mb-5 text-red-400'>
                <Link to="/about">About Me</Link>
              </li>
              <li className='mb-5 text-blue-700' >
                <Link to="/contact">Contact Me</Link>
              </li>
              
            </ul>
            </div>
            
            
            <div className='w-[80%]  flex border-2 border-blue-300 mr-5 mb-1'>
            <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        </div>
        </div>
        </div>
          </nav>
         
      
      </header>
    </Router>
  

    </>
  )
}

export default App
