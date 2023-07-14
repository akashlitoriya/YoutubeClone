import React from 'react'
import ButtonContainer from './ButtonContainer'
import VideoContainer from './VideoContainer'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex flex-row'>
        <Sidebar />
        <Outlet />
    </div>
    
  )
}

export default Body
