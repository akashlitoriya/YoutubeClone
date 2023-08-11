import React from 'react'
import icon from "../utils/Live Chat Icon.png"

const Chat = ({name, message}) => {
  return (
    <div className='flex gap-2 items-center m-1 bg-slate-200 p-1 rounded'>
      <img src = {icon} alt = "User Icon" className='h-[40px]'/>
      <span className='font-bold'>{name}</span>
      <span>{message}</span>
    </div>
  )
}

export default Chat
