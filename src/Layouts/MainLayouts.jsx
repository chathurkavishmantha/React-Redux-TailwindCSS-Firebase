import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const MainLayouts = () => {
  return (
    <div className='w-full h-screen'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayouts