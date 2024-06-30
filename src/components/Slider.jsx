import React, { useContext, useState } from 'react'
import news1 from "../assets/news1.jpg"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';

const Slider = ({slidingNews}) => {
  // console.log("slider: ",slidingNews);
  const [current, setCurrent]=useState(0)
  let newsDate, today, msDiff, daysAgo;
  const theme=useContext(ThemeContext)
  const mode = theme.state.darkMode;
  function daysPast(date){
    newsDate=new Date(date);
    today= new Date();
    msDiff= today - newsDate;
    daysAgo = Math.floor(msDiff / (1000 * 60 * 60 * 24));
  }

  const handleLeft= ()=>{
    var next;
    if(current==0)
      next=2;
    else
      next=current -1;
    setCurrent(next);
  }

  const handleRight= ()=>{
    var next;
    if(current==2)
      next=0;
    else
      next=current + 1;
    setCurrent(next);
  }

  return (
    <div className={`w-full py-10 flex h-[30rem] justify-center items-center ${mode?  "text-[#2a2648] bg-[#c89e6e]": "bg-gray-100"}`}>
      <FaArrowLeft className='m-3 w-[2rem] h-[2rem]' onClick={handleLeft} />
      <div>
        {
          slidingNews && slidingNews.map((e,indx)=>{
            if(indx==current){
          const {title, publishedAt, author, urlToImage, url}=e;
          daysPast(publishedAt)
          // console.log(title, publishedAt, author, urlToImage, url);
          return(<div className='flex justify-center items-center flex-col'>
                  <img src={urlToImage? urlToImage:news1} alt="" 
                  className="sm:w-[25rem] sm:h-[12.5rem] lg:w-[50rem] lg:h-[25rem] relative z-10 p-2" />
                  <a href={url} className="px-2 font-medium text-lg group-hover:underline group-hover:text-blue-800">{title}</a>
                  <h6 className='px-2 italic text-sm'>By {author}</h6>
                  {daysAgo? 
                  <h6 className="px-2 text-sm"> 
                  {daysAgo} 
                  {daysAgo==1? <span> day </span>: <span> days </span>}
                   ago</h6>: <span>today</span>}
            </div>)
            }
          })
        }
      </div>
      <FaArrowRight className='m-3 w-[2rem] h-[2rem]' onClick={handleRight}/>
    </div>
  )
}

export default Slider
