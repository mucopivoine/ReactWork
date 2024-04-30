import React from 'react'
import { useState } from 'react';

import OtpInput from './OtpInput';

const Otpconfirm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput , setshowOtpInput] = useState(false)
  const handlePhoneNumber = (event) => { 
    setPhoneNumber(event.target.value)
  };
  const handlePhoneSubmit = (event) => {
    event.preventDefault
    // phone validations
    const regex = /[^0-9]/g;
    if(phoneNumber.length<10 || regex.test(phoneNumber)){
      alert("invalid phone number");
      return;
    }
    // call backend api
    // show otp field
    setshowOtpInput(true)
  };
  const onOtpSubmit = (otp) => {
console.log("login successfull",)
  }

  return (
    <div className='container bg-green-100 items-center justify-center flex flex-col h-[80vh]'>
      <h1>Here comes OTP</h1>
      <div className='relative items-center border-2 mb-3 p-12 w-[50%] bg-yellow-100'>
      {!showOtpInput?(<form onSubmit={handlePhoneSubmit}>
       <input type="text" value={phoneNumber} onChange={handlePhoneNumber} placeholder='Enter Phone Number'  className='p-3 mr-3'/>
       <button type="submit"className='border-2 border-blue-500 bg-blue-500 rounded-lg p-2' >Submit</button>
      </form> ):(<div>
        <p>Enter OTP sent to { phoneNumber }</p>
        <OtpInput length={4} onOtpSubmit={onOtpSubmit}/>
        </div>
        )}
      </div>
    </div>
  )
}

export default Otpconfirm