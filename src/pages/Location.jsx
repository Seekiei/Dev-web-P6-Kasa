import React from "react";
import { useParams } from "react-router-dom"
import data from '../datas/data.json';
import Carousel from "../components/SlideShow";
import Collapse from "../components/Collapse"
import '../styles/Location.scss'



function Location(){

  const { id } = useParams()
  const location = data.find(location => location.id === id)
    
      return (
        <div className="main-location">
            <Carousel pictures={location.pictures}/>
            <div className="location-top">
              <div className="location-title">
                <h1>{location.title}</h1>
                <h3>{location.location}</h3>
                <ul className="location-tags">
                  {
                    location.tags.map((tag, index) => (
                      <li key={index}>{tag}</li>
                    ))
                  }
                </ul>
              </div>
              <div className="location-host">
                <p>{location.host.name}</p>
                <img className="img-host" src={location.host.picture} alt="" />
                {/* <i>{location.rating}</i> */}
              </div>
            </div>
            <div className="location-bottom" >
              <div className="collapse-left">
                <Collapse className="locatio-collapse" title={'Description'} width='98%' widthdesc='100%'>
                  <p>{location.description}</p>
                </Collapse>
              </div>
                
              <div className="collapse-right">
                <Collapse title={'Équipements'} width='98%' widthdesc='100%'>
                <ul className="location-equipements">
                  {
                    location.equipments.map((equipement, index) => (
                      <li key={index}>{equipement}</li>
                    ))
                  }
                </ul>
                </Collapse>
              </div>
            </div>
        </div>
      )
    }


export default Location