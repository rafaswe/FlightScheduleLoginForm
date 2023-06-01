// import React from 'react'
import planPhoto from '../assets/Boeing 1.png'
import flightLogo from '../assets/flightLogo.png'
import './Component.css'
import MainForm from './MainForm'

const LoginForm = () => {
  return (
    <div className='mt-lg-5 pt-lg-4 pt-sm-2 mt-sm-2'>
      <div className='customWidth '>
        <div className="row gx-5 gy-2 mt-2">
          <div className="col-md-7 col-sm-12 ">
            <img src={planPhoto} className='w-100 h-100 customRadius customDisplay' alt="" />
          </div>
        <div className="col-md-5 col-sm-12 customRadius bg-white p-5 shadow">
            <img src={flightLogo} alt="" className='d-block mx-auto mb-4  '  />
            <p className='fs-2 customMargin'>Login to account</p>
            <MainForm />
        </div>
      </div>

    </div>
    </div>
    
    

  )
}

export default LoginForm