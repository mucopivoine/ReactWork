import React from 'react'
import { Link } from 'react-router-dom'

function ConfirmPage() {
  return (
    <div className="container bg-green-100 items-center justify-center flex flex-col h-[80vh]">
          <div className='relative items-center border-2 mb-3 p-12 w-[70%] h-[50vh] bg-yellow-100'>
            <h1 className='text-2xl text-blue-500'>Welcome to the Home Page</h1>
            <div className='text-blue-500 mt-20'>
                <p>You have successfully logged in to the home page If you want to enter press the button below!🥳🥳</p>
            </div>
            <button type='submit'  className='bg-blue-300 border-2 border-blue-400 rounded-md px-[100px] mt-10 mx-auto  text-center'><Link to="/homepage">Enter here</Link></button>
          </div>
    </div>
  )
}

export default ConfirmPage