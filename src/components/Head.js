import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/AppSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResult} from "../utils/SearchSlice";
import store from "../utils/store";
const Head = () => {
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  
  useEffect(() => {

    //Debouncing 

    const timer = setTimeout(() => {
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery])
      }else{
        getSearchSuggestions()
      }
      }, 200);
    return () => {
      clearTimeout(timer);
    }
  },[searchQuery])


  const getSearchSuggestions =  async() => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResult({
      [searchQuery] : json[1],
    }))
  }
  

    
    const toogleSidebarMenu = () => {
        dispatch(toggleMenu());
    }


  return (
    <div className='grid grid-flow-col p-3 m-2 shadow-lg'>
        <div className='flex  items-center col-span-1'>
          <img 
            onClick= {() => toogleSidebarMenu()}
            className='h-8 mx-2 cursor-pointer'
            src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
            alt = "Menu"
          />
          <img
            className='h-20'
            src = "https://logo-download.com/wp-content/data/images/svg/YouTube-logo.svg"
            alt = "Logo"
          />
        </div>

        <div className='col-span-10 w-full m-auto'>
          <div >
            <input 
              value = {searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              type='text' 
              className='border border-gray-700 w-1/2 px-5 py-2 rounded-l-full'
              onFocus={() => setShowSuggestion(true)}
              onBlur={() => setShowSuggestion(false)}
            />
            <button className='border border-gray-700 rounded-r-full px-5 py-2'> Search</button>
          </div>
          {showSuggestion && (
            <div className='absolute bg-slate-100 w-[40rem] px-6 py-2 rounded-lg shadow-xl border border-gray-400'>
              <ul>
                {suggestion.map((s) => <li key = {s} className='py-2 hover:bg-gray-200'>{s}</li>)}
              </ul>
            </div>
          )}
        </div>

        <div className='col-span-1 h-full flex items-center '> 
          <img
          className='h-8'
          src = "https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
          alt = "User"
          />
        </div>
    </div>
    
  )
}

export default Head
