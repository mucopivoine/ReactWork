import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Otpconfirm = () => {
  const [otp, setOtp] = useState('');
  const handleOtp = (e) => {
    setOtp(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleConfirm(otp);
  };
  const otpDigits = otp.split('');

  return (
    <div className='container bg-green-100 items-center justify-center flex flex-col h-[80vh]'>
      <h1>Here comes OTP</h1>
      <div className='relative items-center border-2 mb-3 p-12 w-[50%] bg-yellow-100'>
      <form onSubmit={handleSubmit}>
        <div className='mb-5 flex flex-col'>
          {otpDigits.map((digit, index)=> (
            <div key={index} className='mr-2'>
              {digit}
              </div>
          ))}
        <label for="">Enter OTP</label>
        <input type="text" value={otp} className=' container' onChange={handleOtp}></input>
        <button type='submit'  className='bg-blue-300 border-2 border-blue-400 rounded-md px-[100px] mx-auto mt-5 text-center'><Link to="/confirmpage">Confirm OTP</Link></button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Otpconfirm