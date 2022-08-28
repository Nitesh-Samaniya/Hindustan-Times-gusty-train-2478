import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Tags from "../Tags/Tags";
import Footer from "../Footer/Footer"
import { Grid } from '@chakra-ui/react';

export default function EntertainmentTagPage() {
    const [data, setData] = useState([]);

    useEffect(()=>{
        axios.get("https://fake-news-api-nitesh.herokuapp.com/entertainment")
        .then(res=>{
          console.log("business",res.data)
          setData(res.data)
        })
    },[])
  return (
    <div>
      <Navbar />
      <Tags />
      <div style={{width:'73%',margin:'auto'}}>
      
      <Grid templateColumns='repeat(3, 1fr)' gap={6}>
        {
         data.map((el)=>(
            <div key={el.id}>
              <img src={el.urlToImage} alt={el.id}/>
              <p style={{color:'gray'}}>Publish At: {el.publishedAt}</p>
              <h1>Author: {el.author}</h1>
              <h1 style={{fontWeight:'bold'}}>{el.title}</h1>
              <h1 style={{color:'red'}}>{el.description}</h1>
            </div>
          )) 
        }
    </Grid>
      </div>
      <Footer />
    </div>
  )
}
