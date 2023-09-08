import React from 'react'
import './jobs.css'
import DataJobs from "../../data/data.json"

const Jobs = () => {
  return (
      <>
      {DataJobs.map((item, id ) => {
        return(
          <div className="wrapper">
            <div>
              <img src={item.logo} alt="company logo" />
            </div>
           <div>
            <p>{item.postedAt}</p>
            <p>{item.contract}</p>
          </div>
          <div>
            <h2>{item.position}</h2>
            <h4>{item.description}</h4>
          </div>
          <div>
            <a href="">{item.website}</a>
            <a href="">{item.apply}</a>
            <p>{item.location}</p>
          </div>
          </div>
        )
      })}
      </>
    )
}

export default Jobs