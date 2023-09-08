import React from 'react'
import './jobs.css'
import DataJobs from "../../data/data.json"
import { BsDot } from "react-icons/bs"

const Jobs = () => {
  return (
      <div className="wrapper">
      {DataJobs.map((item, id ) => {
        return(
          <div>
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
            {/* <p lassName="description">{item.description}</p> */}
          </div>
          <div className="links">
          <a href={item.website} className="website"><p>{item.company}</p></a>
          {/* <a href={item.apply}><p>{item.apply}</p></a> */}
          <a href="" className="location"><p>{item.location}</p></a>
          </div>
          </div>
        )
      })}
      </div>
    )
}

export default Jobs