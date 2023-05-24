import React from "react"
import '../styles/Banner.scss'

function Banner({ backgroundImage, title }) {
    
    const bannerStyle = {
        backgroundImage: `url(${backgroundImage})`, // image de fond
    }

    return(
        <div className="banner-container">
            <section className='banner' style={bannerStyle}>
                <h1 className="title-banner">{title}</h1>
            </section>
        </div>
    )
}

export default Banner