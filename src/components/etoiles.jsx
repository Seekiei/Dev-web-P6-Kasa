import React from "react";
import starEmpty from '../assets/star-empty.png'
import starFilled from '../assets/star-filled.png'

function Etoiles({rating}){

    const starsListes = [ 1, 2, 3, 4 ,5 ]  //  Ces valeurs représentent les différentes notes pour les étoiles
        
    return(
        <div className="ratingStar">
            { 
                starsListes.map((star, index) => ( // Utilise la méthode map sur le tableau starsListes pour itérer sur chaque élément (valeur) du tableau
/*condition ternaire*/ rating >= star ? <i key={index}><img src={starFilled} alt="" /></i> : <i key={index}><img src={starEmpty} alt="" /></i> // Les keys aident React à identifier quels éléments d’une liste ont changé, ont été ajoutés ou supprimés
                )) 
            }
        </div>
    )
}

export default Etoiles