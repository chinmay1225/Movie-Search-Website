import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='min-h-screen bg-gray-950 text-white'>
        <Navbar />
        
        <main className='pt-16'>
            <Outlet />
        </main>
    </div>
  )
}

export default Layout;