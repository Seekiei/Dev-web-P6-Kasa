import { Link } from "react-router-dom";
import '../styles/Header.css' 
import logo from '../assets/logo.png';

function Header() {
    return (
        <nav className="navbar">
            <Link to="/"><img className="nav-img" src={logo} alt="Logo" /></Link>
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/About">A Propos</Link>
                </li>
            </ul>
        </nav>
    )
}


export default Header