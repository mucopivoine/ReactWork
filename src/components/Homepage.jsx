import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './Header';
import Home from './Home'
import About from './About'
import Contact from './Contact'

function Homepage() {
    return (
        <div>
            <header className=''>
                <nav>
                    <div className='bg-red-200  h-[92vh] flex flex-col rounded-lg border-2 border-blue-400 '>
                        <Header />
                        <div className='flex flex-row w-full'>
                            <div className='w-[30%]  '>
                                <ul className='flex flex-col font-bold gap-3 pt-10 text-xl'>
                                    <li className='mb-5 text-blue-700 hover:text-red-400'>
                                        <Link to="/home">Home </Link>
                                    </li>
                                    <li className='mb-5 text-blue-700 hover:text-red-400'>
                                        <Link to="/about">About Me</Link>
                                    </li>
                                    <li className='mb-5 text-blue-700 hover:text-red-400'>
                                        <Link to="/contact">Contact Me</Link>
                                    </li>

                                </ul>
                                </div>
                                <div className='w-full  rounded-lg border-2 border-blue-400 mr-3 h-[80vh] bg-yellow-200 '>
                                    <Routes>
                                        <Route exact path="/home" element={<Home />} />
                                        <Route path="/about" element={<About />} />
                                        <Route path='/contact' element={<Contact />} />
                                    </Routes>
                                </div>
                            </div>
                        
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Homepage