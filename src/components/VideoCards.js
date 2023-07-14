import React from 'react'

const VideoCards = ({info}) => {
     
    const {snippet, statistics} = info;
    const { channelTitle, thumbnails, title} = snippet;
    const { viewCount } = statistics;
  return (
    <div className='p-2 m-2 shadow-lg w-64'>
        <img className = "rounded-lg "alt = "thumbnail" src = {thumbnails.medium.url} /> 
        <h2 className='font-bold'>{title}</h2>
        <h4 className='font-normal'>{channelTitle}</h4> 
        <h4>{viewCount} views</h4>
    </div>
    
  );
}

export default VideoCards
