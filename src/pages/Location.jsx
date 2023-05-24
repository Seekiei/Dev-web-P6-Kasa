import React from "react";
import { useParams, useNavigate } from "react-router-dom"
import data from '../datas/data.json';
import Error from './Error'
import Carousel from "../components/SlideShow";
import Collapse from "../components/Collapse"
import '../styles/Location.scss'
import Etoiles from '../components/etoiles'



function Location(){

  const { id } = useParams() // le hook useParams récupére l'id de la location à partir de l'url de la page
  const location = data.find(location => location.id === id) // la méthode find trouve l'objet de données qui correspond à l'id de la location demandée
  const navigate = useNavigate(); // Le hook useNavigate est utilisé pour obtenir une fonction navigate qui permet de naviguer vers une autre page de l'application

  if (!location) {
    navigate('/Error')
    return (<Error/>)
  }

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
                <div className="host-container">
                <p>{location.host.name}</p>
                <img className="img-host" src={location.host.picture} alt=""/>
                </div>
                <Etoiles rating={parseInt(location.rating)}/>
              </div>
            </div>
            <div className="location-bottom" >
              <div className="collapse-left">
                <Collapse className="location-collapse" title={'Description'} width='98%' widthdesc='100%'>
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