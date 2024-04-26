import React from 'react'
import { Link } from 'react-router-dom'

function Forgetps() {
  return (
    <div>
         <div className='container bg-green-100 items-center justify-center flex flex-col '>
        <h1 className='p-10 text-2xl text-blue-500'>Create Password</h1>
        <div className=''>
    <div className='relative flex items-center h-[70vh] border-2 mb-3 p-12 bg-yellow-100 '>
        <form>
          
            <div className=''>
                <label htmlFor='email' className='block text-sm text-blue-500'> Enter Your Email</label>
                <input type="email" id="Email"  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm p-2"/>
            </div>
            <div className=''>
                <label htmlFor='password' className='block text-sm text-blue-500'> Enter New Password</label>
                <input type="password" id="password"  className="mt-1 w-full rounded-md border-gray-200 bg-white flex-start text-sm text-gray-700 shadow-sm p-2"/>
            </div>
            <div className=''>
                <label htmlFor='Confirm Password' className='block text-sm text-blue-500'>Confirm Your Password</label>
                <input type="password" id="passwordcofirmation"  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm p-2"/>
            </div>
            <div className='flex flex-col'>
            <Link to="/"><button type='submit' className='bg-blue-300 w-50 border-2 border-blue-400 rounded-md px-[100px] mx-auto mt-5'>Create account</button></Link> 
            
            <Link to="/signup" className='underline text-xl text-blue-500 pt-5'>Go back</Link>
            </div>
        </form>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Forgetps