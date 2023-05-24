import React from "react";
import { Link } from 'react-router-dom'
import '../styles/Error.scss'


function ErrorPage() {
    return(
      <section className='error_container'>
        <h1 className="error-404">404</h1>
        <p className="p-404">Oups! La page que vous demandez n'existe pas.</p>
        <div><Link to="/">Retourner sur la page d'accueil.</Link></div>
      </section>
    )
}

export default ErrorPage