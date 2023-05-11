import React, { useState, useEffect } from 'react'
import './collection.css'
import { useNavigate } from 'react-router-dom';
const Collection = () => {
  const [popular, setPopular] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(
      "https://api.tvmaze.com/search/shows?q=all"
    )
      .then((res) => res.json())
      .then((data) => {
        setPopular(data);
      });
  }, []);

  const handledata = (e, i) => {
    e.preventDefault();
    let iddata = popular.filter(data => data.show.id === i);
    var namedDept = iddata.map(resp => {
      return resp;
    });

    localStorage.setItem('data', JSON.stringify(namedDept));
    navigate('/Summary')

  }
  return (
    <div >
      <div className='main' >

        {popular.map((map, i) => {
          return (
            <div key={map.show.id} className='card'>
              {map.show.image == null ? <img src='https://static.tvmaze.com/uploads/images/medium_portrait/33/82953.jpg' alt='' /> : <img src={map?.show?.image?.medium} alt="" />}
              <div className='card_content'>
                <h5>id:-{map.show.id}</h5>
                <h2 className='.card_title '>
                  Name:- {map.show.name}
                </h2>
                <p>Language:-{map.show.language}</p>
                <p>Type:-{map.show.type}</p>
              </div>
              <button onClick={(e) => handledata(e, map.show.id)}>Read more..</button>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Collection

