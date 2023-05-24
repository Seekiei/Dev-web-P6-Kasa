import React, { useState } from 'react';
import '../styles/Collapse.scss'
import arrowUp from '../assets/arrow-top.png'
import arrowDown from '../assets/arrow-down.png'

function Collapse({ title, children, width = "75%", widthdesc = "100%" }) {

    const [isOpen, setIsOpen] = useState(false) // useState est un hook de gestion d'état dans React Il est utilisé pour ajouter la gestion de l'état à un composant fonctionnel

    const widthCollapse = { // Cette propriété est définie dynamiquement en utilisant la valeur de la prop width
        width: width
      } 

    const widthDesc = {
        width: widthdesc
    }

    return(
        <div className="collapse" style={widthCollapse}>
            <div className='collapse-toggle' onClick={() => setIsOpen(!isOpen)} >
                <h3>{title}</h3>
                <img className='collapse-img' src={isOpen ? arrowUp : arrowDown } alt="collapse-icon" />
            </div>
            {isOpen && //cette condition permet d'afficher la description de la collapse seulement si c'est true
            <div className='collapse-content' style={widthDesc}>
                {children}
            </div>}
        </div>
    )
}

export default Collapse