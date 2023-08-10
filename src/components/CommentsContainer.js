import React from 'react'
import Comments from './Comments'
import {comments} from '../utils/CommentsData';

const CommentsList = ({CommentsData}) => {
    return (
        <div>
            {CommentsData.map((comments, index) => 
            <div>
                <Comments key = {index} data = {comments} />
                <div className='ml-5 border-l-2'>
                    <CommentsList CommentsData={comments.replies} />
                </div>
            </div>
            )}
            <div></div>
        </div>
    )
}


const CommentsContainer = () => {
  return (
    <div className='mx-3 my-1'>
      <h1 className='font-bold text-lg'>Comments :</h1>
      <CommentsList CommentsData = {comments} />

    </div>
  )
}

export default CommentsContainer
