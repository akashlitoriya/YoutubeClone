import React from 'react'

const Comments = ({data}) => {
  return (
    <div>
      <div className='flex items-center w-full bg-gray-200 px-4 py-2 gap-3 rounded-md my-1'>
        <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="user" className='h-8'/>
        <div>
            <p className='font-bold'>{data.name}</p>
            <p>{data.text}</p>
        </div>
      </div>
    </div>
  )
}

export default Comments
