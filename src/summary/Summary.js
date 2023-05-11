import React from 'react'
import './Summary.css'
const Summary = () => {
  const data = JSON.parse(localStorage.getItem('data'));
  return (
    <div className="movie-card">

      <div className="container">

      <a href='/summary'>{
          data[0].show.image == null ? <img src='https://static.tvmaze.com/uploads/images/medium_portrait/33/82953.jpg' alt="" className='cover' /> : <img src={data[0].show.image.medium} alt="cover" className="cover" />}</a>

        <div className="hero">
          {data[0].show.image == null ? <img src="https://static.tvmaze.com/uploads/images/medium_portrait/33/82953.jpg" alt="" /> :
            <img src={data[0].show.image.original} alt="" />}

          <div className="details">

            <div className="title1">{data[0].show.name}</div>

          </div>

        </div>

        <div className="description">
          <div className="column2">
            <h4>Summary</h4>
            <p>{data[0].show?.summary.replace(/<[^>]*>/g, '')}</p>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Summary
