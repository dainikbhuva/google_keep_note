import React from 'react'
import logo from './component/logo.png'

const Header = () => {
  return (
    <>
      <div className='header'>
        <img src={logo} alt='logo' height={100} width={100} />
        <h1> Google Keep Note </h1>
      </div>
    </>
  )
}

export default Header
