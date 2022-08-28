import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = React.createContext();

export default function NewsContextProvider({children}){
  const [news, setNews] = useState([]);
  const [leftNews, setLeftNews] = useState([]);
  const [rightNews, setRightNews] = useState([]);

  useEffect(() => {
    
        axios.get("https://fake-news-api-nitesh.herokuapp.com/news_all")
        .then(res=>{
          // console.log(res.data);
          setNews(res.data);
        })
        
    }, []);

    useEffect(() => {
    
        axios.get("https://fake-news-api-nitesh.herokuapp.com/business")
        .then(res=>{
          // console.log(res.data);
          setLeftNews(res.data);
        })
      
    }, []);

    useEffect(() => {
    
        axios.get("https://fake-news-api-nitesh.herokuapp.com/entertainment")
        .then(res=>{
          // console.log(res.data);
          setRightNews(res.data);
        })
      
    }, []);

  // console.log("news", news);

    return (
        <NewsContext.Provider value={{news,leftNews,rightNews}}>
            {children}
        </NewsContext.Provider>
    )
}