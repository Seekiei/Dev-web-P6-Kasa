import React, { useState } from 'react';
import '../styles/Collapse.scss'
import arrowUp from '../assets/arrow-top.png'
import arrowDown from '../assets/arrow-down.png'

function Collapse({ title, children, width = "75%", widthdesc = "77%" }) {

    const [isOpen, setIsOpen] = useState(false)

    const widthVolet = {
        width: width
      } 

    const widthDesc = {
        width: widthdesc
    }

    return(
        <div className="collapse">
            <div className='collapse-toggle' onClick={() => setIsOpen(!isOpen)} style={widthVolet}>
                <h3>{title}</h3>
                <img className='collapse-img' src={isOpen ? arrowUp : arrowDown } alt="collapse-icon" />
            </div>
            {isOpen && <div className='collapse-content' style={widthDesc}>
                {children}
                </div>}
        </div>
    )
}

export default Collapse