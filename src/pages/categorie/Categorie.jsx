import React, { useState, useContext, useEffect } from 'react'
import { ThemeContext } from '../../context/ThemeContext';
import { useLocation } from "react-router-dom";
import NewsCard from '../../components/NewsCard';
import loadingSVG from '../../assets/loading-svg.svg'
import useUrl from '../../hooks/useUrl';

const Categorie = () => {

  const [country, setCountry]=useState("in")
  const [inputValue, setInputValue] = useState(""); // State to store the input value
  const {state}=useLocation();
  
  const apiKey= process.env.REACT_APP_API_KEY
  const url=`https://newsapi.org/v2/top-headlines?country=${country}&category=${state.categorie}&apiKey=${apiKey} `;
  const {news,loading,error}=useUrl(url,[country,state.categorie]);

  const theme=useContext(ThemeContext)
  const mode = theme.state.darkMode;

  const filterCountry = (e) => {
    e.preventDefault(); 
    console.log(inputValue); // This will now correctly log the input value
    setCountry(inputValue);
  }

  console.log(news)
  return (<div className={`${mode?  "text-[#fbe6dd]  bg-[#c89e6e]": ""}`}>
    <div className={`flex flex-col justify-center items-center pt-4 mb-10 ${mode?  "text-gray-700  bg-[#c89e6e]": ""}`} >
      <form onSubmit={filterCountry}>
        <input 
          type="text" 
          placeholder='Enter country name' 
          value={inputValue} // Bind input value to state
          onChange={(e) => setInputValue(e.target.value)} // Update state on input change
          className={`mx-8 py-1 px-2 rounded-full outline outline-black outline-1 duration-300 hover:scale-105 focus:scale-105 ${mode ? 'bg-gray-900 text-white hover:shadow-gray-400' : 'bg-beige text-black'}`}
        />
        <button type='submit' className={`font-medium rounded-full px-4 py-1 rounded-md text-black ${mode ? "bg-gray-700 text-gray-100": "bg-gray-200"}`}>Filter Country</button>
      </form>
    </div>

    <div className="pt-4 pb-10 flex flex-col justify-center items-center flex-wrap gap-[3rem]">
        {loading && <div className="flex justify-center items-center">
          <img src={loadingSVG} alt="Loading..." className="w-16 h-16" />
        </div>}
        {error && <h1>some error occured....</h1>}
        {!error && !news && <div>try with different search keyword</div>}
        {!loading && !error && news &&
        <div className="flex justify-center items-center flex-wrap gap-[2rem]">
        { 
        news.map((e,indx)=>{
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

export default Categorie
