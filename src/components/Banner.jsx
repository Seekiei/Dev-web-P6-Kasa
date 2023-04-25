import React from "react"
import '../styles/Banner.css'

function Banner({ backgroundImage, title }) {
    
    const bannerStyle = {
        backgroundImage: `url(${backgroundImage})`,
      }

    return(
        <div>
            <section className='banner' style={bannerStyle}>
                <h1 className="title-banner">{title}</h1>
            </section>
        </div>
    )
}

export default Banner