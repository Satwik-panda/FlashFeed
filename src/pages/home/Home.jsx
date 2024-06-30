import React, { useContext, useEffect, useState } from 'react'
import NewsCard from '../../components/NewsCard';
import Slider from '../../components/Slider';
import loadingSVG from '../../assets/loading-svg.svg'
import useUrl from '../../hooks/useUrl';
import { ThemeContext } from '../../context/ThemeContext';

const Home = () => {
  
  const apikey= process.env.REACT_APP_API_KEY
  const url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}`;
  const {news,loading,error}=useUrl(url);

  const sliderNews = news.slice(0, 3);
  const remainingNews = news.slice(3);
  
  
  const theme=useContext(ThemeContext)
  const mode = theme.state.darkMode;


  return (<>
    <Slider slidingNews={sliderNews}/>
    <div className={`pt-4 pb-10 flex flex-col justify-center items-center flex-wrap gap-[3rem] ${mode?  "text-[#fbe6dd] bg-[#2a2c2f]": ""}`}>
        {loading && <div className="flex justify-center items-center">
          <img src={loadingSVG} alt="Loading..." className="w-16 h-16" />
        </div>
        }
        {error && <h1>some error occured....</h1>}
        {!error && !news && <div>try with different search keyword</div>}
        {!loading && !error && news &&
        <div className="flex justify-center items-center flex-wrap gap-[2rem]">
        { 
        remainingNews && remainingNews.map((e,indx)=>{
          return (<NewsCard
          key={indx}
          title ={e.title}
          date={e.publishedAt}
          author={e.author}
          Imgurl={e.urlToImage}
          url={e.url}
          />)
        })}
        </div>
        }
    </div>
    </>
  )
}

export default Home
