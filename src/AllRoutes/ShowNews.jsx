import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Tags from '../Tags/Tags'
import LeftSection from "../HomePage/LeftSection"
import RightSection from "../HomePage/RightSection";
import { Box, Text } from '@chakra-ui/react'


function fetchdata(id) {
  return fetch(`https://fake-news-api-nitesh.herokuapp.com/news_all/${id}`).then((res) => res.json());
}

function ShowNews() {
  
  const [data,setData] = useState({});

  const param = useParams();

  useEffect(() => {
    fetchdata(param.id).then((res) => {
      console.log(res);
      setData(res);
    });
  }, [param.id]);

  
  return (
    <div>
        <Navbar />
        <Tags />
        <div style={{display:'flex',width:'73%',margin:'auto',gap:'2rem'}}>
        <LeftSection />
        <div>
          <Box bg='gray' w="25%" color="blue">

          <Link to="/">Back To Home Page</Link>
          </Box>
          <Text fontSize='2xl'>{data.description}</Text>
          <img src={data.urlToImage} alt="news" />
          <h2>{data.name}</h2>
          <Text fontSize='1xl'>{data.content}</Text>
        </div>
        <RightSection />
        </div>
        <Footer />
    </div>
  )
}

export default ShowNews
