import React, { useContext, useEffect, useState } from 'react'
import { json, useLocation } from 'react-router-dom'
import NewsCard from '../../components/NewsCard'
import loadingSVG from '../../assets/loading-svg.svg'
import useUrl from '../../hooks/useUrl'
import { ThemeContext } from '../../context/ThemeContext'

const Search = () => {
  const {state}=useLocation();
  const apikey = process.env.REACT_APP_API_KEY;
  const url =`https://newsapi.org/v2/top-headlines?q=${state}&apiKey=${apikey}`;
  const {news,loading,error}=useUrl(url,[state]);
  console.log("news",news);
  const theme=useContext(ThemeContext)
  const mode = theme.state.darkMode;

  return (
    <div className={`pt-4 h-auto flex flex-col justify-center items-center flex-wrap gap-[3rem] ${mode?  "text-[#2a2648]  bg-[#c89e6e]": ""}`}>
      <h1 className="xsm:text-2xl font-semibold">News about: <span>{state}</span></h1>
      <div>
        {
        loading && <div className="flex justify-center items-center">
          <img src={loadingSVG} alt="Loading..." className="w-16 h-16" />
        </div>
        }
        {error && <h1>some error occured....</h1>}
        {!news && !loading && <div>try with different search keyword</div>}
        {!loading && !error && news &&
        <div className="flex justify-center items-center flex-wrap gap-[2rem]">
        {news.map((e,indx)=>{
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
    </div>
  )
}

export default Search
