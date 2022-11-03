import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';

export default function Home() {
  const [data, setData] = useState([]);
  const [heading, setHeading] = useState('');
  useEffect(() => {
    axios.get('https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=d61c1dfd583a481cb6026dac11b11701')
      .then((res) => {
        setHeading("General")
        setData(res.data.articles)
      });
  }, [])

  const getGeneralData = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=d61c1dfd583a481cb6026dac11b11701')
      .then((res) => {
        setHeading("General")
        setData(res.data.articles)
      });
  }
  const getSportsData = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=d61c1dfd583a481cb6026dac11b11701')
      .then((res) => {
        setHeading("Sports")
        setData(res.data.articles)
      });
  }
  const getScienceData = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=d61c1dfd583a481cb6026dac11b11701')
      .then((res) => {
        setHeading("Science")
        setData(res.data.articles)
      });
  }
  const getEntertainmentData = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=d61c1dfd583a481cb6026dac11b11701')
      .then((res) => {
        setHeading("Entertainment")
        setData(res.data.articles)
      });
  }
  const getTechnologyData = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=d61c1dfd583a481cb6026dac11b11701')
      .then((res) => {
        setHeading("Technology")
        setData(res.data.articles)
      });
  }
  const getBusinessData = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=d61c1dfd583a481cb6026dac11b11701')
      .then((res) => {
        setHeading("Business")
        setData(res.data.articles)
      });
  }
  const getHealthData = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=d61c1dfd583a481cb6026dac11b11701')
      .then((res) => {
        setHeading("Health")
        setData(res.data.articles)
      });
  }
  const getIndiaData = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=d61c1dfd583a481cb6026dac11b11701')
      .then((res) => {
        setHeading("India")
        setData(res.data.articles)
      });
  }
  const getUSAData = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=d61c1dfd583a481cb6026dac11b11701')
      .then((res) => {
        setHeading("USA")
        setData(res.data.articles)
      });
  }
  const getCanadaData = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=ca&apiKey=d61c1dfd583a481cb6026dac11b11701')
      .then((res) => {
        setHeading("Canada")
        setData(res.data.articles)
      });
  }
  const news = data.map((value, index) => {
    return (
      <div key={index} className='card'>
        <img src={value.urlToImage} alt='*' />
        <div className='card-body'>
          <h3 className='title'>{value.title}</h3>
          <p className='card-text'>{value.description}</p>
          <a className='card-link' href={value.url}>Read More</a>
        </div>
      </div>
    )
  })
  return (
    <div className='box'>

      <div className='b1'>

        <div className='cat'>
          <hr />
          <h1>Category</h1>

          <button onClick={getGeneralData}>General</button>
          <button onClick={getSportsData}>Sports</button>
          <button onClick={getScienceData}>Science</button>
          <button onClick={getEntertainmentData}>Entertainment</button>
          <button onClick={getTechnologyData}>Technology</button>
          <button onClick={getBusinessData}>Business</button>
          <button onClick={getHealthData}>Health</button>
          <br />
        </div>

        <div className='coun'>
          <hr />
          <h1>Country</h1>
          <button onClick={getIndiaData}>India</button>
          <button onClick={getUSAData}>USA</button>
          <button onClick={getCanadaData}>Canada</button>
        </div>
      </div>
      <div className='card1'>
        <div className='heading'>{heading}</div>
        <hr className='line' />
        <div>{news}</div>


      </div>
    </div>
  )
}
