import React from "react";
import starEmpty from '../assets/star-empty.png'
import starFilled from '../assets/star-filled.png'

function Etoiles({rating}){

    const starsListes = [ 1, 2, 3, 4 ,5 ]  
        
    return(
        <div className="ratingStar">
            {
                starsListes.map((star, index) => (
                    rating >= star ? <i key={index}><img src={starFilled} alt="" /></i> : <i key={index}><img src={starEmpty} alt="" /></i>
                ))
            }
        </div>
    )
}

export default Etoiles