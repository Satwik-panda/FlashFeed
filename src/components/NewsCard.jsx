import React, { useContext } from 'react'
import news1 from "../assets/news1.jpg"
import { ThemeContext } from '../context/ThemeContext';
import './card.css'

function NewsCard ({title, date, author, Imgurl, url}){
  const theme=useContext(ThemeContext)
  const mode = theme.state.darkMode;
  if(author == null)
    return;
  const newsDate=new Date(date);
  const today= new Date();
  const msDiff= today - newsDate;
  const daysAgo = Math.floor(msDiff / (1000 * 60 * 60 * 24));

  

  // console.log(msDiff);
  return (
    <a href={url} target='_blank' 
    className={`news-card group flex flex-col w-[20rem] h-[25rem] overflow-clip  
    rounded-md hover:scale-105 duration-300
    ${mode?  "text-[#2a2648] bg-[#6caed7]": "bg-[#98d2c9]"}
    hover:outline-slate-700 shadow-lg hover:shadow-lg hover:shadow-gray-500`}>
      <img src={Imgurl? Imgurl:news1} alt="" 
      className="w-[320px] h-[185px] p-2" />
      <h1 className="px-2 font-medium text-lg group-hover:underline  group-hover:text-blue-800  ">{title}</h1>
      <h6 className='px-2 italic text-sm'>By {author}</h6>
      {daysAgo? <h6 className="px-2 text-sm"> {daysAgo} {daysAgo==1? <span>day</span>: <span>days</span>} ago</h6>: <span>today</span>}
    </a>
  )
}

export default NewsCard
