import React from "react";
import { Link } from "react-router-dom";
import '../styles/Card.scss'

function Card({ title, cover, id }){

    return(
        <article className="card">
            <Link to={`/Location/${id}`}>
            <img src={cover} alt={title}/>
            <p>{title}</p>
            </Link>
        </article>
    )
}

export default Card
