import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useUrl = (url, dependency=[]) => {
    console.log("dependency",dependency);
    const [news, setNews]=useState("");
    const [loading, setLoading]= useState(false);
    const [error, setError]= useState("")
  
    async function getNewsData(){
        setLoading(true)
        try{
        const {data} = await axios.get(url);
        setNews(data.articles); 
        setError('');
        }catch{
        setError("some Error occured...")
        setNews('')
        }finally{
        setLoading(false)
        }
    }

    useEffect(()=>{
        getNewsData();
    },dependency)
    return {news,loading,error};
}

export default useUrl;
