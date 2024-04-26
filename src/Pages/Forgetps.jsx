import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

function Forgetps() {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  }); 
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setError({ ...error, email: '' });
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setError({ ...error, password: '' });
  };

  const handleConfirm = (e) => {
    setConfirmPassword(e.target.value);
    setError({ ...error, confirmPassword: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  
    let newErrors = {};
    if (!email.trim()) {
        newErrors = { ...newErrors, email: 'Email must have @gmail.com or .net' };
      }
      if (password.length < 8) {
        newErrors = {
          ...newErrors,
          password: 'Password must be at least 8 characters long',
        };
      }
      if (password !== confirmPassword) {
        newErrors = { ...newErrors, confirmPassword: 'Passwords do not match' };
      }
    
      setError(newErrors);
    
      if (Object.values(newErrors).every((val) => val === '')) {
        console.log('Form submitted successfully');
      }
    };

  return (
    <div>
         <div className='container bg-green-100 items-center justify-center flex flex-col '>
        <h1 className='p-10 text-2xl text-blue-500'>Create Password</h1>
        <div className=''>
    <div className='relative flex items-center h-[70vh] border-2 mb-3 p-12 bg-yellow-100 '>
        <form onSubmit={handleSubmit}>
          
            <div className=''>
                <label htmlFor='email' className='block text-sm text-blue-500' > Enter Your Email</label>
                <input type="email" id="Email"  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm p-2" onChange={handleEmail}/>
                {formSubmitted && error.email && <p className='text-red-500'>{error.email}</p>}
            </div>
            <div className=''>
                <label htmlFor='password' className='block text-sm text-blue-500'> Enter New Password</label>
                <input type="password" id="password"  className="mt-1 w-full rounded-md border-gray-200 bg-white flex-start text-sm text-gray-700 shadow-sm p-2" onChange={handlePassword}/>
                {formSubmitted && error.password && <p className='text-red-500'>{error.password}</p>}
            </div>
            <div className=''>
                <label htmlFor='Confirm Password' className='block text-sm text-blue-500'>Confirm Your Password</label>
                <input type="password" id="passwordcofirmation"  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm p-2"  onChange={handleConfirm}/>
                {formSubmitted && error.confirmPassword && (
                <p className='text-red-500'>{error.confirmPassword}</p>
                )}
            </div>
            <div className='flex flex-col'>
            <button type='submit' className='bg-blue-300 w-50 border-2 border-blue-400 rounded-md px-[100px] mx-auto mt-5'>Create account</button> 
            
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