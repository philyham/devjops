import React, { useState, useEffect } from 'react'
import './jobs.css'
import DataJobs from "../../data/data.json"
import { BsDot } from "react-icons/bs"

const Jobs = () => {
  const [items, setItems] = useState([])
  const [visibleItems, setVisibleItems] = useState(3)
  const dataUrl = "../../data/data.json"
  console.log("data", dataUrl)

  useEffect(() => {
    fetch(dataUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      console.log('Fetched data:', data); 
      setItems(data);
    })
    .catch((error) => console.error('Error fetching data:', error));
}, []);

  const loadMoreItems = () => {
    setVisibleItems(visibleItems + 3)
  }
  
  return (
      <div className="wrapper">
       {DataJobs.map((item, id) => {
        return(
            <div key={item.id}>
            <div className="logo">
              <img src={item.logo} alt="company logo" />
            </div>
           <div className="time">
            <p>{item.postedAt}</p>
             <BsDot size={25} className="icon"/>
            <p>{item.contract}</p>
          </div>
          <div>
            <h2 className="title">{item.position}</h2>
            <p lassName="description">{item.description}</p>
          </div>
          <div className="links">
          <a href={item.website} className="website"><p>{item.company}</p></a>
          {/* <a href={item.apply}><p>{item.apply}</p></a> */}
          <a href={item.id} className="location"><p>{item.location}</p></a>
          </div>
          </div>
          )
        })}
          {/* <div className="btn-wrapper">
        <button className="btn">Load More</button>
       </div> */}
      </div>
    )
}

export default Jobs