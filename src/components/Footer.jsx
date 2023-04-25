import React from "react";
import Logo from '../assets/logo-footer.png'
import '../styles/Footer.css'


function Footer() {
    return(
        <footer>
            <img className="footer-img" src={Logo} alt="Logo kasa" />
            <span>© 2020 Kasa. All rights reserved</span>
        </footer>
    )
}

export default Footer