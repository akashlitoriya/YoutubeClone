import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);
    if(!isMenuOpen) return null;
  return (
    <div  className = "w-36 bg-gray-100 shadow-sm">
        <div className='mt-3 p-4 border-b-2 border-gray-500'>
        <ul>
            <li className='font-semibold'><Link to="/">Home</Link></li>
            <li className='font-semibold'>Short</li>
            <li className='font-semibold'>Subscription</li>
        </ul>
      </div>
      <div className='mt-3 p-4 border-b-2 border-gray-500'>
        <ul>
            
            <li className='font-semibold'>Library</li>
            <li className='font-semibold'>History</li>
            <li className='font-semibold'>Your Videos</li>
            <li className='font-semibold'>Watch Later</li>
        </ul>
      </div>
      <div className='mt-3 p-4 border-b-2 border-gray-500'>
        <ul>
            <li className='font-bold'>Subscribed</li>
            <li>Akshay Saini</li>
            <li>Code help</li>
            <li>Anuj Bhaiya</li>
            <li>Akshat Shrivastav</li>
        </ul>
      </div>
      
      
    </div>
  )
}

export default Sidebar
