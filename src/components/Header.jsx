import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='bg-green-300 rounded-lg p-4 m-2 border-2 border-blue-300 '>
        <div className='font-bold text-xl flex justify-between pl-5 text-blue-700' >
      <h1>Jane Doe</h1>
      <Link to="/signup" className='border-2 border-blue-500'>Login</Link> 
       </div>
    </div>
  )
}

export default Header