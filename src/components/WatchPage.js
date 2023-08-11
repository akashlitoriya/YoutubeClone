import React, { useEffect } from 'react'
import { closeMenu } from '../utils/AppSlice'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'
import LiveChat from './LiveChat'

const WatchPage = () => {
    const [searchParam] = useSearchParams();
    const videoId = searchParam.get("v");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
    })
  return (
    <div className = "flex flex-col w-full">
      <div className='flex px-4 gap-4 w-full'>
        <div>
          <iframe width="1100" height="550" src={"https://www.youtube.com/embed/" + videoId} title="NAPOLEON - Official Trailer (HD)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div className='w-full'>
          <LiveChat />
        </div>
      </div>
      
      <CommentsContainer />
    </div>
    
  )
}

export default WatchPage
