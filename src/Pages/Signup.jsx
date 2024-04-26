import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('');
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

  const handleName = (e) => {
    setName(e.target.value);
    setError({ ...error, name: '' });
  };

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
  
    if (!name.trim()) {
      newErrors = { ...newErrors, name: 'Full name is required' };
    }
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
    <div className='container bg-green-100 items-center justify-center flex flex-col '>
      <h1 className='p-10 text-2xl text-blue-500'>SIGN UP HERE</h1>
      <div className=''>
        <div className='relative flex items-center h-[70vh] border-2 mb-3 p-12 bg-yellow-100 '>
          <form onSubmit={handleSubmit}>
            <div className='mb-5'>
              <label htmlFor='name' className='block text-sm text-blue-500'>
                Enter Your Name
              </label>
              <input
                type='text'
                id='name'
                value={name}
                onChange={handleName}
                className='mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm p-2'
              />
              {formSubmitted && error.name && <p className='text-red-500'>{error.name}</p>}
            </div>
            <div className='mb-5'>
              <label htmlFor='email' className='block text-sm text-blue-500'>
                Enter Your Email
              </label>
              <input
                type='email'
                id='Email'
                value={email}
                onChange={handleEmail}
                className='mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm p-2'
              />
              {formSubmitted && error.email && <p className='text-red-500'>{error.email}</p>}
            </div>
            <div className='mb-5'>
              <label htmlFor='password' className='block text-sm text-blue-500'>
                Enter Your Password
              </label>
              <input
                type='password'
                id='password'
                value={password}
                onChange={handlePassword}
                className='mt-1 w-full rounded-md border-gray-200 bg-white flex-start text-sm text-gray-700 shadow-sm p-2'
              />
              {formSubmitted && error.password && <p className='text-red-500'>{error.password}</p>}
            </div>
            <div className='mb-5'>
              <label htmlFor='confirmPassword' className='block text-sm text-blue-500'>
                Confirm Your Password
              </label>
              <input
                type='password'
                id='confirmPassword'
                value={confirmPassword}
                onChange={handleConfirm}
                className='mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm p-2'
              />
              {formSubmitted && error.confirmPassword && (
                <p className='text-red-500'>{error.confirmPassword}</p>
              )}
            </div>
            <div className='flex flex-col'>
              <button
                type='submit'
                className='bg-blue-300 w-50 border-2 border-blue-400 rounded-md 
                px-[100px] mx-auto mt-5'
              >
                Create account
              </button>
              <Link to='/forgetps' className='text-blue-600'>
                Forgot Password?
              </Link>
            </div>
            <p>Already have an account?</p>
            <Link to='/homepage' className='underline text-xl text-blue-500'>
              Log In
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;