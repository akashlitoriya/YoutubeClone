import React, { useEffect, useState } from 'react'
import Chat from './Chat'
import { useDispatch, useSelector } from 'react-redux';
import { addChats } from '../utils/ChatSlice';
import { generateRandomMessage, generateRandomName } from '../utils/liveChatHelper';

const LiveChat = () => {

    const[inputChat, setInputChat] = useState("");

    const dispatch = useDispatch();
    const chatMessages = useSelector(store => store.chat.chats);
    useEffect(() => {
        const i = setInterval(() => {
            console.log("API Polling")

            dispatch(
                addChats({
                    name: generateRandomName(),
                    message : generateRandomMessage(20)
                })
            )
        }, 2000);
        return () => clearInterval(i);
    },[]);

  return (
    <div className='h-[550px] w-full border border-black py-1 px-2 rounded-md bg-slate-100'>
      <h1 className='font-bold'>Live Chat</h1>
      <div className='flex flex-col-reverse overflow-y-scroll h-[450px]'>
        {chatMessages.map((chat, index) =>
        <Chat name = {chat.name} message={chat.message} key = {index} />
        )}
      </div>
      <form className='w-full' 
        onSubmit={(e) => {
            e.preventDefault();
            dispatch(
                addChats({
                name:"Akash",
                message: inputChat
            }))
            setInputChat("");
        }}>
        <div className="">
            <input 
                className='px-4 py-3 border rounded-l-full shadow w-72'
                value = {inputChat}
                type='text'
                onChange={(e)=> setInputChat(e.target.value)}
            />
            <button className='px-4 py-3 border rounded-r-full font-bold text-lg shadow'>&gt;</button>
        </div>
        
      </form>
    </div>
  )
}

export default LiveChat
