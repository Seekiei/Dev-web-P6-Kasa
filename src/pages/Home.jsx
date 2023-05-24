import Banner from "../components/Banner";
import React from "react";
import '../styles/Home.css'
import Bannerimg from '../assets/banner.png'
import Card from "../components/Card";
import customData from '../datas/data.json';


function Home() {

  return (
    <div className="main">
    
      <Banner backgroundImage={Bannerimg} title="Chez vous, partout et ailleurs" />
      
      <div className="grid-card">
      {
        customData.map((cardData)=> {
          return( 
            <Card key={cardData.id} id={cardData.id} cover={cardData.cover} title={cardData.title} />
          )
        })
      }
      </div>
    
    </div>
  );
}

export default Home;
